let Biens = require('../models/biens');

// Ajout d'un Bien (POST)
function saveBien(bienBody, userId) {
    let bien = new Biens();
    bien.adressePostale = bienBody.adressePostale;
    bien.typeBien = bienBody.typeBien;
    bien.loyer = bienBody.loyer;
    bien.surface = bienBody.surface;
    bien.proprietaireId = userId;
    return new Promise((resolve, reject) => {
        bien.save((err) => {
            if (err) {
                reject(`cannot save Biens ${err}`,);
            }
            resolve(`${bien.adressePostale} saved!`);
        });
    })
}

// Update d'un bien (PUT)
function updateBiens(bienId, bienBody,userId) {
    return new Promise((resolve, reject) => {
        Biens.findOneAndUpdate({ $and : [ {_id: bienId} ,{proprietaireId: userId}  ]  }, bienBody, { new: true }, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(`Bien ${bienId} modifié`);
        });
    })
}


// suppression d'un bien (DELETE)
function deleteBien(id) {
    return new Promise((resolve, reject) => {
        Biens.findByIdAndRemove(id, (err, bien) => {
            if (err) {
                reject(err);
            }else if (bien) {
                resolve(`${bien.adressePostale} deleted`);
            }else{
                reject(`Element not found!`);
            }
        })
    })
}

// Récupérer tous les biens (GET)
function getBiensPaginate(page, limit,userId) {
    console.log("USER ID",userId);
    var aggregateQuery = Biens.aggregate([
        {
            $match: { proprietaireId: userId },
        },
    ]);
    return new Promise((resolve, reject) => {
        Biens.aggregatePaginate(aggregateQuery,
            {
                page: parseInt(page) || 1,
                limit: parseInt(limit) || 10,
            },
            (err, biens) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                resolve(biens);
            }
        );
    })
}

// Récupérer un bien par son id (GET)
function getBienById(bienId,userId) {
    return new Promise((resolve, reject) => {
        Biens.findOne({ $and : [ {_id: bienId} ,{proprietaireId: userId}  ]  }, (err, bien) => {
            if (err) { reject(err) }
            resolve(bien);
        })
    })
}


// Récupérer tous les biens (GET)
function getBiens(userId) {
    return new Promise((resolve, reject) => {
        Biens.find({ proprietaireId: userId }, (err, biens) => {
            if (err) {
                reject(err)
            }
            resolve(biens);
        });
    })
}


module.exports = { saveBien, updateBiens, deleteBien, getBiensPaginate, getBienById, getBiens };


