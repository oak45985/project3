const { Schema, model } = require('mongoose');
// const orderTagSchema = require('./Tags/OrderTag');

const orderSchema = new Schema(
    {
        orderNumber: {
            type: Number,
            required: true,
            min: 4,
            max: 4
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        code: {
            type: String
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        customer: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Customer'
            }
        ]
    },
  {
    toJSON: {
        getters: true
    }
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;