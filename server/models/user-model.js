/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// userSchema.pre("save", async function () {
//   // hashing the password before saving it to the database
//   if (this.isModified("password")) {
//     this.password = require("bcryptjs").hashSync(this.password, 10);
//   }
// });




// compare the password
userSchema.methods.comaparepassword = async function (password) {
  return  bcrypt.compare(password,this.password);
};









// json webtoken
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userID: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECREAT_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
