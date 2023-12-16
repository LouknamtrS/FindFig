const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
    id:String,
    fname: String,
    lname: String,
    email: String,
    barcode: String,
    manufacturer: String,
    figureName: String,
    figureGrade: String,
    boxGrade: String,
    note: String,

});

const sellerRequest = mongoose.model('sellerRequest', sellerSchema);

module.exports = sellerRequest;