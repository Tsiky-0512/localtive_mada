const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = Schema({
    //Unique id created automatically by the mongoose
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
    password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
