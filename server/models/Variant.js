const { Schema } = require('mongoose');

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
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = variantSchema;