const { Schema, model } = require('mongoose');
const productTagSchema = require('./Tags/ProductTag');
const variantSchema = require('./Variant');

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        isCounted: {
            type: Boolean,
            default: false
        },
        isFree: {
            type: Boolean,
            default: false
        },
        variants: [variantSchema],
        productTags: [productTagSchema]
    },
  {
    toJSON: {
        getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;