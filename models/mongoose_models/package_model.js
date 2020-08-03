const mongoose = require('../mongoose_connect');
// Creating the Agency Schema
const PackageSchema = new mongoose.Schema({
    PackageId: {
        type: Number,
        required: true,
        unique: true
    },
    PkgName: {
        type: String,
        required: true,
        trim: true
    },
    PkgStartDate: Date,
    PkgEndDate: Date,
    PkgDesc: String,
    PkgBasePrice: Number,
    PkgAgencyCommission: Number
    // more fields defined below
});
// Creating the Agency collection Model
module.exports = mongoose.model('Packages', PackageSchema);
