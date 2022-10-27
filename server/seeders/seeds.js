const db = require('../config/connection');
const { Customer, Staff, Product, Order } = require('../models');

const seedCustomers = [
    {

    },
];

const seedStaff = [
    {

    },
];

const seedProducts = [
    {

    },
];

const seedOrders = [
    {

    },
];

db.once('open', async () => {
    await Customer.deleteMany({});
    await Customer.insertMany(seedCustomers);
    await Staff.deleteMany({});
    await Staff.insertMany(seedStaff);
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    await Order.deleteMany({});
    await Order.insertMany(seedOrders);

    console.log('finished!');
    process.exit(0);
});