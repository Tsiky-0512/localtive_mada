const mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const Schema = mongoose.Schema;

const facturesSchema = Schema({
    date: { type: Date, required: true},
    typeBien: { type: String, enum : ['maison','appartement'] , required: true },
    loyer: { type: Number, required: true },
    surface: { type: Number, required: true }
});

facturesSchema.plugin(aggregatePaginate);


module.exports = mongoose.model("Factures", facturesSchema);
