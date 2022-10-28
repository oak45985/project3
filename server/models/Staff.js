const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const staffSchema = new Schema(
    {
        staffName: {
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
            minlength: 5
        }
    }
);

// staffSchema.pre('save', async function(next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

// staffSchema.methods.isCorrectPassword = async function(password) {
//     return bcrypt.compare(password, this.password);
// };

const Staff = model('Staff', staffSchema);

module.exports = Staff;