let Factures = require('../models/factures');
const locatairesService = require("./locatairesService");
const mailService = require("./mailService");
const mongoose = require("mongoose");




// Ajout d'un Bien (POST)
function saveFacture(factureBody, userId) {
    let facture = new Factures();
    facture.dateQuittance = factureBody.dateQuittance;
    facture.datePaiement = factureBody.datePaiement;
    facture.mois = factureBody.mois;
    facture.bailleurId = userId;
    facture.bienId = factureBody.bienId;
    facture.locataireId = factureBody.locataireId;
    facture.loyer = factureBody.loyer;

    return new Promise((resolve, reject) => {
        facture.save((err) => {
            if (err) {
                reject(`cannot save Factures ${err}`,);
            }
            resolve(`Facture saved!`);
        });
    })
}

async function generateFacture(body, userId) {

    return new Promise(async (resolve, reject) => {
        try {
            const locataires = await locatairesService.getLocataires(userId);
            for (const locataire of locataires) {
                const factureBody = {
                    dateQuittance: body.dateQuittance,
                    datePaiement: body.datePaiement,
                    mois: body.mois,
                    locataireId: locataire?._id,
                    bienId: locataire?.adressePostale?._id,
                    loyer: locataire?.adressePostale?.loyer,
                }
                await saveFacture(factureBody, userId);
            }
            resolve("generated!");
        } catch (error) {
            reject(error.message);
        }
    })

}

// Récupérer tous les factures (GET)
function getFacturesPaginate(page, limit, userId) {
    var aggregateQuery = Factures.aggregate(
        [
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'bailleurId',
                    'foreignField': '_id',
                    'as': 'bailleurDetails'
                }
            }, {
                '$unwind': {
                    'path': '$bailleurDetails'
                }
            }, {
                '$lookup': {
                    'from': 'biens',
                    'localField': 'bienId',
                    'foreignField': '_id',
                    'as': 'bienDetails'
                }
            }, {
                '$unwind': {
                    'path': '$bienDetails'
                }
            }, {
                '$lookup': {
                    'from': 'locataires',
                    'localField': 'locataireId',
                    'foreignField': '_id',
                    'as': 'locataireDetails'
                }
            }, {
                '$unwind': {
                    'path': '$locataireDetails'
                }
            }
        ]);
    return new Promise((resolve, reject) => {
        Factures.aggregatePaginate(aggregateQuery,
            {
                page: parseInt(page) || 1,
                limit: parseInt(limit) || 10,
            },
            (err, factures) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(factures);
            }
        );
    })
}

// getFatcure By Id
function getFacturesById(id) {
    console.log(id);
    var aggregateQuery = [
            {
                '$match': {
                    '_id': mongoose.Types.ObjectId(id)
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'bailleurId',
                    'foreignField': '_id',
                    'as': 'bailleurDetails'
                }
            }, {
                '$unwind': {
                    'path': '$bailleurDetails'
                }
            }, {
                '$lookup': {
                    'from': 'biens',
                    'localField': 'bienId',
                    'foreignField': '_id',
                    'as': 'bienDetails'
                }
            }, {
                '$unwind': {
                    'path': '$bienDetails'
                }
            }, {
                '$lookup': {
                    'from': 'locataires',
                    'localField': 'locataireId',
                    'foreignField': '_id',
                    'as': 'locataireDetails'
                }
            }, {
                '$unwind': {
                    'path': '$locataireDetails'
                }
            }
        ];
    return new Promise((resolve, reject) => {
        Factures.aggregate(aggregateQuery,
            (err, factures) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(factures);
            }
        );
    })
}

// Envoyer email de la facture 
async function sendFacture(idFacture) {
    const facture = await getFacturesById(idFacture);
    let result = false;
    if (facture[0]) {
        result =  await mailService.sendInviteEmail(facture[0],facture[0]?.locataireDetails?.email);        
    }
    return result;
}


module.exports = { saveFacture, getFacturesPaginate, sendFacture, generateFacture };

