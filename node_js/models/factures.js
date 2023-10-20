const mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const Schema = mongoose.Schema;

const facturesSchema = Schema({
    dateQuittance: { type: Date, required: true},
    datePaiement: { type: Date, required: true},
    mois: { type: String, required: true},   
    loyer: { type: Number, required: true} ,
    bailleurId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    locataireId: {
        type: Schema.Types.ObjectId,
        ref: 'locataires',
        require: true
    },
    bienId:{
        type: Schema.Types.ObjectId,
        ref: 'Biens',
        required: true
    },
});

facturesSchema.index({ mois: 1, bailleurId: 1 ,locataireId: 1 ,bienId :1  }, { unique: true });

facturesSchema.plugin(aggregatePaginate);


module.exports = mongoose.model("Factures", facturesSchema);
