const { Schema, model } = require('mongoose');
const customerTagSchema = require('./Tags/CustomerTag');
const bcrypt = require('bcrypt');

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
            maxlength: 15
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
            virtuals: true
        }
    }
);

customerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

customerSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

customerSchema.virtual('orderCount').get(function() {
    return this.orders.length;
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;