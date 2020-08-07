// Created by Arman
const mongoose = require('../mongoose_connect');

// Creating the Agency Schema
const BookingSchema = new mongoose.Schema({
    
    BookingDate: {
        type: Date,
        required: false,
        trim: true
    },
    BookingNo: String,
    TravelerCount: Number,
    PCustomerId: String,
    PackageName: String,
    TripTypeId: String
   
});
// Creating the Agency collection Model
module.exports = mongoose.model('Booking', BookingSchema);

