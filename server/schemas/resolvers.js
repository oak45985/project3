const { Staff } = require('../models');

const resolvers = {
    Query: {
      staff: async (parent, { staffName }) => {
        return Staff.findOne({ staffName })
          .select('-__v');
      },

      allStaff: async () => {
        return Staff.find()
          .select('-__v');
      }
    },

    Mutation: {
      addStaff: async (parent, args) => {
        const staff = await Staff.create({ ...args });
        console.log(`Staff member ${staff} added!`);
        return staff;
      }
    }
};
  
  module.exports = resolvers;