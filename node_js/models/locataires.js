const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const locataireSchema = Schema({
    //Unique id created automatically by the mongoose
    userId: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { 
        type: String ,
        required :true ,
        unique: true ,
        validate : {
            validator :  function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message : 'Invalid email address'
        }
    },
    adressePostale: {
        type: Schema.Types.ObjectId,
        ref: 'Biens',
    },
    telephone: { type: String, required: true },
});

locataireSchema.plugin(uniqueValidator);
locataireSchema.plugin(aggregatePaginate);
module.exports = mongoose.model("Locataire", locataireSchema);
