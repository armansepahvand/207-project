const Agency = require('./mongoose_models/Agency_model')
const Agent = require('./mongoose_models/Agent_model')
const Customer = require('./mongoose_models/User_model')
const Package = require('./mongoose_models/Package_model')
const Booking = require('./mongoose_models/Booking_model')
const bcrypt = require('bcryptjs')
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

        const myuser = new Customer(user);  // User Mongoose Model
        myuser.save(function (err) {    // Saves the user to the DB
            //if (err) return console.error(err);
            callBack(err, 'Ok');
        })
    })
}

// update user profile
exports.updateUser = function (user, callBack) {

    Customers.findById(req.customer._id).then(function (customer) {
        if (!currentUser) { return res.sendStatus(401); }
        if (typeof req.body.customer.CustFirstName !== 'undefined') {
            customer.CustFirstName = req.body.customer.CustFirstName;
        }
        if (typeof req.body.customer.CustLastName !== 'undefined') {
            customer.CustLastName = req.body.customer.CustLastName;
        }
        if (typeof req.body.customer.CustAddress !== 'undefined') {
            customer.CustAddress = req.body.customer.CustAddress;
        }
        if (typeof req.body.customer.CustCity !== 'undefined') {
            customer.CustCity = req.body.customer.CustCity;
        }
        if (typeof req.body.customer.CustProv !== 'undefined') {
            customer.CustProv = req.body.customer.CustProv;
        }
        if (typeof req.body.customer.CustPostal !== 'undefined') {
            customer.CustPostal = req.body.customer.CustPostal;
        }

        if (typeof req.body.customer.CustPassword !== 'undefined') {
            customer.setPassword(req.body.customer.CustPassword);
        }
        return customer.save().then(function () {
            return res.json({ customer: customer.toAuthJSON() });
        });
    }).catch(next);
    const myupdatedprofile = new Customer(user);  // User Mongoose Model
    myupdatedprofile.save(function (err) {    // Saves the user to the DB
        //if (err) return console.error(err);
        callBack(err, 'Ok');
    });
}



exports.createBooking = function (booking, callBack) {

    const mybooking = new Booking(booking);  // User Mongoose Model
    mybooking.save(function (err) {    // Saves the user to the DB
        //if (err) return console.error(err);
        callBack(err, 'Ok');
    })
}

/*// Updates Customer/user information
exports.updateUser = function (user, callBack) {
    bcrypt.hash(user.CustPassword, 10, (err, hashedPassword) => {
        user.CustPassword = hashedPassword;
        console.log(hashedPassword);
           
    const myuser =   // User Mongoose Model
    myuser.save(function (err) {    // Saves the user to the DB
        //if (err) return console.error(err);
        callBack(err, 'Ok');
         })
        })
}*/

// Get the use using the userId
exports.getUser = function (userId, callBack) {
    Customer.findById(userId, (err, data) => {
        //console.log('In getUser')
        //console.log(err, data);
        callBack(err, data); // Send the results back
    });
}

// Get the use using the userId
exports.getUserName = function (Username, callBack) {
    Customer.findOne({ CustUsername: username }, (err, data) => {
        //console.log('In getUser')
        //console.log(err, data);
        callBack(err, data); // Send the results back
    });
}
exports.getPackage = function (PkgName, callBack) {
    Package.findOne({ PkgName }, (err, data) => {
        //console.log('In getUser')
        //console.log(err, data);
        callBack(err, data); // Send the results back
    });
}

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
                return callBack(null, user, { message: "DWelcome " + user.CustFirstName });
            } else {
                // passwords do not match!
                return callBack(null, false, { message: "Incorrect password" });
            }
        })
    });
}