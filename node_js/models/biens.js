const mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const Schema = mongoose.Schema;

const biensSchema = Schema({
    adressePostale: { type: String, required: true , unique : true },
    typeBien: { type: String, enum : ['maison','appartement'] , required: true },
    loyer: { type: Number, required: true },
    surface: { type: Number, required: true },
    proprietaireId:{ type: String, required: true}
});

biensSchema.plugin(aggregatePaginate);


module.exports = mongoose.model("Biens", biensSchema);
