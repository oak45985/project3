const { Staff, Product } = require('../models');

const resolvers = {
    Query: {
      staff: async (parent, { staffName }) => {
        return Staff.findOne({ staffName })
          .select('-__v');
      },

      allStaff: async () => {
        return Staff.find()
          .select('-__v');
      },

      product: async (parent, { title }) => {
        return Product.findOne({ title })
          .select('-__v');
      },

      products: async () => {
        return Product.find()
          .select('-__v');
      }
    },

    Mutation: {
      addStaff: async (parent, args) => {
        const staff = await Staff.create({ ...args });
        console.log(`Staff member ${staff} added!`);
        return staff;
      },
      addProduct: async (parent, args) => {
        const product = await Product.create({ ...args });
        console.log(`Product added: ${product.title}`);
        return product;
      },
      addVariant: async (parent, { productId, variantTitle, sku}) => {
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: productId },
          { $push: { variants: { variantTitle, sku } } },
          { new: true });

        return updatedProduct;
      },
      addProductTag: async (parent, { productId, productTag}) => {
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: productId },
          { $push: { productTags: { productTag } } },
          { new: true });

        return updatedProduct;
      }
    }
};
  
  module.exports = resolvers;