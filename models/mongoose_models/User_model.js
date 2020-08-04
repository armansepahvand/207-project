const mongoose = require('../mongoose_connect');
// Creating the User Schema
const UserSchema = new mongoose.Schema({
    CustFirstName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    CustLastName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    CustPassword: {
        type: String,
        required: true,
        trim: true
    },
    CustUsername: {
        type: String,
        required: true,
        trim: true
    },

    CustAddress: String,
    CustCity: String,
    CustProv: String,
    CustPostal: String,
    CustPhone: String
    // more fields defined below
});
// Creating the User collection Model
module.exports = mongoose.model('Customer', UserSchema);
