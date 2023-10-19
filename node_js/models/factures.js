const mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const Schema = mongoose.Schema;

const facturesSchema = Schema({
    dateQuittance: { type: Date, required: true},
    datePaiement: { type: Date, required: true},
    mois: { type: String, required: true},
    typeBien: { type: String, enum : ['maison','appartement'] , required: true },
    loyer: { type: Number, required: true },
    surface: { type: Number, required: true },
    nomBailleur:{ type: String, required: true },
    adressePostaleBailleur: { type: String, required: true },
    emailBailleur: { 
        type: String ,
        required :true ,
        validate : {
            validator :  function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message : 'Invalid email address'
        }
    },
    telephoneBailleur: { type: String, required: true },
    emailLocataire : { 
        type: String ,
        required :true ,
        validate : {
            validator :  function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message : 'Invalid email address'
        }
    },
    nomLocataire : { type: String, required: true },
    bailleurId: { type: String, required: true }
});

facturesSchema.plugin(aggregatePaginate);


module.exports = mongoose.model("Factures", facturesSchema);
