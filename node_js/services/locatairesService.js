let Locataires = require('../models/locataires');


// Ajout d'un locataire (POST)
function saveLocataire(locataireBody) {
    let locataire = new Locataires();
    locataire.nom = locataireBody.nom;
    locataire.prenom = locataireBody.prenom;
    locataire.email = locataireBody.email;
    locataire.adressePostale = locataireBody.adressePostale;
    locataire.telephone = locataireBody.telephone;
    return new Promise((resolve, reject) => {
        locataire.save((err) => {
            if (err) {
                reject(`cannot save locataires ${err}`,);
            }
            resolve(`${locataire.email} saved!`);
        });
    })
}

// Update d'un locataire (PUT)
function updateLocataires(locataireId, locataireBody) {
    return new Promise((resolve, reject) => {
        Locataires.findByIdAndUpdate({ _id: locataireId }, locataireBody, { new: true }, (err) => {
            if (err) {
                reject(err)
            }
            resolve(`Locataire ${locataireId} modifié`);
        });
    })
}

// suppression d'un locataire (DELETE)
function deleteLocataire(id) {
    return new Promise((resolve, reject) => {
        Locataires.findByIdAndRemove(id, (err, locataire) => {
            if (err) {
                reject(err);
            }
            resolve(`${locataire.email} deleted`);
        })
    })
}

// Récupérer tous les locataires (GET)
function getLocatairesPaginate(page, limit) {
    var aggregateQuery = Locataires.aggregate();
    return new Promise((resolve, reject) => {
        Locataires.aggregatePaginate(aggregateQuery,
            {
                page: page || 1,
                limit: limit || 10,
            },
            (err, locataires) => {
                if (err) {
                    reject(err);
                }
                resolve(locataires);
            }
        );
    })
}

// Récupérer un locataire par son id (GET)
function getLocataireById(locataireId) {
    return new Promise((resolve, reject) => {
        Locataires.findOne({ _id: locataireId }, (err, locataire) => {
            if (err) { reject(err) }
            resolve(locataire);
        })
    })
}


// Récupérer tous les locataires (GET)
function getLocataires() {
    return new Promise((resolve, reject) => {
        Locataires.find((err, locataires) => {
            if (err) {
                reject(err)
            }
            resolve(locataires);
        });
    })
}

module.exports = { saveLocataire,updateLocataires,deleteLocataire,getLocatairesPaginate,getLocataireById,getLocataires };

