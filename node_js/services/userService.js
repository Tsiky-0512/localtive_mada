
const bcrypt = require("bcrypt");
const User = require('../models/user');
const jwtService = require('../security/auth');


const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10).then((hash) => {
            resolve(hash);
        }).catch((error) => { reject(error) });
    });
}


const comparePasswordEncrypted = (inputPassword, databasePassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, databasePassword).then((valid) => {
            if (valid) {
                resolve(true);
            }
            resolve(false);
        }).catch((error) => {
            reject(`Error on compare Password ${error}`);
        });
    })
}

const saveUser = async (userBody) => {
    try {
        const userModel = new User();
        userModel.nom = userBody.nom;
        userModel.prenom = userBody.prenom;
        userModel.email = userBody.email;
        userModel.password = await encryptPassword(userBody.password);
        return new Promise((resolve, reject) => {
            userModel.save((err) => {
                if (err) {
                    reject(`cant post user :  ${err.message}`);
                }
                resolve("Utilisateur Inscrit!");
            })
        })
    } catch (error) {
        throw ` Error : ${error}`;
    }
}

const checkPasswordUser = async (user) => {
    try {

        return new Promise((resolve, reject) => {
            User.findOne({ email: user.email }, async (err, userBase) => {
                if (err ) { reject(err) };
                if (!userBase) {
                    reject('User non trouvé');
                    return;
                }
                const resultCheck = await comparePasswordEncrypted(user.password, userBase.password);
                if (resultCheck) {
                    console.log("userBase._id :",userBase._id);
                    const res = {
                        email : userBase.email,
                        nom : userBase.nom,
                        prenom : userBase.prenom,
                        token : jwtService.generateToken(userBase._id),
                    }
                    resolve(res);
                }
                reject('Password incorrect');
            });
        });
    } catch (error) {
        throw `error : ${error}`
    }
}

module.exports = { saveUser, checkPasswordUser };
