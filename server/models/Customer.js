const { Schema, model } = require('mongoose');
const customerTagSchema = require('./CustomerTag');
// const bcrypt = require('bcrypt');

const customerSchema = new Schema(
    {
        customerName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Email must match']
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        isMember: {
            type: Boolean,
            default: false
        },
        customerTags: [customerTagSchema],
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

// customerSchema.pre('save', async function(next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

// customerSchema.methods.isCorrectPassword = async function(password) {
//     return bcrypt.compare(password, this.password);
// };
customerSchema.virtual('customerTagList').get(function() {
    return this.customerTags.customerTagSchema;
});

customerSchema.virtual('orderCount').get(function() {
    return this.orders;
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;