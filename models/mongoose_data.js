// Created by all members (various functions)
const Agency = require("./mongoose_models/Agency_model");
const Agent = require("./mongoose_models/Agent_model");
const Customer = require("./mongoose_models/User_model");
const Package = require("./mongoose_models/Package_model");
const Booking = require("./mongoose_models/Booking_model");
const bcrypt = require("bcryptjs");
// This function is retrieving the contact info from the DB
exports.getContactData = (agencyId, callBack) => {
    if (!agencyId)
        Agency.find({}, callBack);  // Get all agencies
    else
        Agent.find({ AgencyId: agencyId }, callBack);   // Get Agents for the given agencyId

      }

// Creates a new user
exports.createUser = function (user, callBack) {
  bcrypt.hash(user.CustPassword, 10, (err, hashedPassword) => {
    user.CustPassword = hashedPassword;
    console.log(hashedPassword);

    const myuser = new Customer(user); // User Mongoose Model
    myuser.save(function (err) {
      // Saves the user to the DB
      callBack(err, "Ok");
    });
  });
};

// update user profile
exports.updateUser = function (user, callBack) {
  Customer.findById(user._id).then(function (customer) {
    if (typeof user.CustFirstName !== "undefined") {
      customer.CustFirstName = user.CustFirstName;
    }
    if (typeof user.CustLastName !== "undefined") {
      customer.CustLastName = user.CustLastName;
    }
    if (typeof user.CustAddress !== "undefined") {
      customer.CustAddress = user.CustAddress;
    }
    if (typeof user.CustCity !== "undefined") {
      customer.CustCity = user.CustCity;
    }
    if (typeof user.CustProv !== "undefined") {
      customer.CustProv = user.CustProv;
    }
    if (typeof user.CustPostal !== "undefined") {
      customer.CustPostal = user.CustPostal;
    }
    if (typeof user.CustHomePhone !== "undefined") {
      customer.CustHomePhone = user.CustHomePhone;
    }


    if (typeof user.CustPassword !== 'undefined') {
      customer.CustPassword = user.CustPassword;
      bcrypt.hash(user.CustPassword, 10, (err, hashedPassword) => {

        customer.CustPassword = hashedPassword;
        user.CustPassword = hashedPassword;


        console.log(hashedPassword);
        console.log("this is the customer", customer.CustPassword)
        console.log("this is the user", user.CustPassword)
        console.log("we are in bcrypt user", customer);
        customer.save().then(function () {

          callBack(null, "Update Successful");

        });
      })
    }
    else {
      console.log("we are in update user", customer);
      customer.save().then(function () {

        callBack(null, "Update Successful");

      });
    }

  })
};

exports.createBooking = function (booking, callBack) {
  const mybooking = new Booking(booking); // User Mongoose Model
  mybooking.save(function (err) {
    // Saves the user to the DB
    callBack(err, "Ok");
  });
};


// Get the use using the userId
exports.getUser = function (userId, callBack) {
  Customer.findById(userId, (err, data) => {
    callBack(err, data); // Send the results back
  });
};

// Get the use using the userId
exports.getUserName = function (Username, callBack) {
  Customer.findOne({ CustUsername: username }, (err, data) => {
    callBack(err, data); // Send the results back
  });
};
exports.getPackage = function (PkgName, callBack) {
  Package.findOne({ PkgName }, (err, data) => {
    callBack(err, data); // Send the results back
  });
};

exports.getBooking = function (id, callBack) {
  Booking.find({ PCustomerId: id }, (err, data) => {
    callBack(err, data); // Send the results back
  });
};

exports.verifyLogin = function (username, password, callBack) {
  Customer.findOne({ CustUsername: username }, (err, user) => {
    if (err) return callBack(err);
    // If username not found
    if (!user) return callBack(null, false, { message: "Incorrect username" });
    //compare the given password with the store encyption
    bcrypt.compare(password, user.CustPassword, (err, res) => {
      if (err) return callBack(err);
      if (res) {
        // passwords match! log user in
        return callBack(null, user, {
          message: "DWelcome " + user.CustFirstName,
        });
      } else {
        // passwords do not match!
        return callBack(null, false, { message: "Incorrect password" });
      }
    });
  });
};
