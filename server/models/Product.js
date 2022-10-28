const { Schema, model } = require('mongoose');
const productTagSchema = require('./ProductTag');
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
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number
        },
        isClass: {
            type: Boolean,
            required: true,
            default: false
        },
        isCounted: {
            type: Boolean,
            default: false
        },
        isFree: {
            type: Boolean,
            default: false,
            required: true
        },
        variants: [variantSchema],
        productTags: [productTagSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

productSchema.virtual('variantList').get(function() {
    return this.variants.variantSchema;
});

productSchema.virtual('productTagList').get(function() {
    return this.productTags.productTagSchema;
});

const Product = model('Product', productSchema);

module.exports = Product;