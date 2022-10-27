const { Schema } = require('mongoose');

const customerTagSchema = new Schema(
    {
        customerTag: {
            type: String,
            maxlength: 50
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = customerTagSchema;