let Locataires = require('../models/locataires');


// Ajout d'un Locataire (POST)
function saveLocataire(locataireBody, userId) {
    let locataire = new Locataires();
    locataire.adressePostale = locataireBody.adressePostale;
    locataire.telephone = locataireBody.telephone;
    locataire.nom = locataireBody.nom;
    locataire.prenom = locataireBody.prenom;
    locataire.email = locataireBody.email;
    locataire.userId = userId;
    return new Promise((resolve, reject) => {
        locataire.save((err) => {
            if (err) {
                reject(`cannot save Locataires ${err}`,);
            }
            resolve(`${locataire.adressePostale} saved!`);
        });
    })
}

// Update d'un locataire (PUT)
function updateLocataires(locataireId, locataireBody,userId) {
    return new Promise((resolve, reject) => {
        Locataires.findOneAndUpdate({ $and : [ {_id: locataireId} ,{userId: userId}  ]  }, locataireBody, { new: true }, (err) => {
            if (err) {
                reject(err);
                return;
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
            }else if (locataire) {
                resolve(`${locataire.adressePostale} deleted`);
            }else{
                reject(`Element not found!`);
            }
        })
    })
}

// Récupérer tous les locataires (GET)
function getLocatairesPaginate(page, limit,userId) {
    console.log("USER ID",userId);
    var aggregateQuery = Locataires.aggregate([
        {
            $match: { userId: userId },
        }
    ]);
    console.log("USER ID",userId);

    return new Promise((resolve, reject) => {
        Locataires.aggregatePaginate(aggregateQuery,
            {
                page: parseInt(page) || 1,
                limit: parseInt(limit) || 10,
            },
            (err, locataires) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(locataires);
            }
        );
    })
}

// Récupérer un locataire par son id (GET)
function getLocataireById(locataireId,userId) {
    return new Promise((resolve, reject) => {
        Locataires.findOne({ $and : [ {_id: locataireId} ,{proprietaireId: userId}  ]  }, (err, locataire) => {
            if (err) { reject(err) }
            resolve(locataire);
        })
    })
}


// Récupérer tous les locataires (GET)
function getLocataires(userId) {
    return new Promise((resolve, reject) => {
        Locataires.find({ proprietaireId: userId }, (err, locataires) => {
            if (err) {
                reject(err)
            }
            resolve(locataires);
        });
    })
}


module.exports = { saveLocataire,updateLocataires,deleteLocataire,getLocatairesPaginate,getLocataireById,getLocataires };

