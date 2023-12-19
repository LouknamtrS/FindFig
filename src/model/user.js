const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true
      },
    fname:{
      type: String,
    },
    lname:{
      type: String,
    },
    profilePic:{
      type: String
    },
    UserAddresses: {
      receiverName: String,
      tel: String,
      address: String,
    }
})

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;