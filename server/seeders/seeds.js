const db = require('../config/connection');
const { Customer, Staff, Product, Order } = require('../models');

db.once('open', async () => {
    await Customer.deleteMany({});
    
    await Staff.deleteMany({});
    
    await Product.deleteMany({});
    
    await Order.deleteMany({});

    console.log('finished!');
    process.exit(0);
});