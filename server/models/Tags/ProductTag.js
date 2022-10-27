const { Schema } = require('mongoose');

const productTagSchema = new Schema(
    {
        productTag: {
            type: String,
            required: true,
            maxlength: 50
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = productTagSchema;