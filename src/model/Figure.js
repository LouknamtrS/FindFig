const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const FigureSchema = new Schema({
    product_code: String,
    name: String,
    price: Number,
    description: String,
    barcode: Number,
    category: [String],
    tags: [String],
    stock: Number,
    release_date: Date,
    release_by: String,
    brand: String,
    series: String,
    copyright: [String],
    manufacturer: String,
    Specifications: [{
        scale: String,
        product_size: String,
        weight: String,
        material: String,
    }],
    preowned_grade: [{
        item: String,
        box: String,
    }],
    imgs: [String]
});

const Figure = model("Figure", FigureSchema);
module.exports = Figure;