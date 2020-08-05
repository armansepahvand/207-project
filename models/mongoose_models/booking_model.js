const mongoose = require('../mongoose_connect');
const { text } = require('express');
// Creating the Agency Schema
const BookingSchema = new mongoose.Schema({
    
    BookingDate: {
        type: Date,
        required: true,
        trim: true
    },
    BookingNo: string,
    TravelerCount: number,
    PCustomerId: String,
    TripTypeId: string
   
    // more fields defined below
});
// Creating the Agency collection Model
module.exports = mongoose.model('Booking', BookingSchema);

