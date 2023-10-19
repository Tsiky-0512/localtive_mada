let Factures = require('../models/factures');


// Ajout d'un Bien (POST)
function saveFacture(factureBody, userId) {
    let facture = new Factures();
    facture.dateQuittance = factureBody.dateQuittance;
    facture.datePaiement = factureBody.datePaiement;
    facture.mois = factureBody.mois;
    facture.typeBien = factureBody.typeBien;
    facture.loyer = factureBody.loyer;
    facture.surface = factureBody.surface;
    facture.bailleurId = userId;
    facture.nomBailleur = factureBody.nomBailleur;
    facture.adressePostaleBailleur = factureBody.adressePostaleBailleur;
    facture.emailBailleur = factureBody.emailBailleur;
    facture.telephoneBailleur = factureBody.telephoneBailleur;
    facture.emailLocataire = factureBody.emailLocataire;
    facture.nomLocataire = factureBody.nomLocataire;
    return new Promise((resolve, reject) => {
        facture.save((err) => {
            if (err) {
                reject(`cannot save Factures ${err}`,);
            }
            resolve(`${facture.adressePostale} saved!`);
        });
    })
}

// Récupérer tous les factures (GET)
function getFacturesPaginate(page, limit,userId) {
    var aggregateQuery = Factures.aggregate([
        {
            $match: { userId: userId },
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

// Envoyer email de la facture 
function sendFacture(idFacture) {
    
}


module.exports = { saveFacture, getFacturesPaginate , sendFacture };

