const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    vendor: {
        type: String,
        trim: true,
        required: true
    },
    vendor_sku_1: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    vendor_sku_2: {
        type: Number,
        trim: true,
        unique: true,
        required: true
    },
    yards: {
        type: Number,
        trim: true,
        unique: false,
        required: true
    },
    cost: {
        type: Number,
        trim: true,
        unique: false,
        required: true
    },
    sku: {
        type: Number,
        trim: true,
        unique: true,
        required: true
    },
    product: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    location: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        unique: true,
        required: true
    }
})

const products = mongoose.model("Products", productSchema);

module.exports = products;