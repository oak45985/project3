const { Schema, model } = require('mongoose');

const productTagSchema = new Schema(
    {
        productTag: {
            type: String,
            required: true,
            maxlength: 50
        }
    }
);

const variantSchema = new Schema(
    {
        variantTitle: {
            type: String,
            required: true
        },
        sku: {
            type: String,
            required: true,
            toUpperCase: true
        }
    }
);

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
        getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;