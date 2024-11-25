/** @format */
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to the mern stack development this is using routerrrrrrrrrrrrrrrrr"
      );
  } catch (error) {
    console.log(error);
  }
};

// For register logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exist" });
    }
    // hash the password
    const saltRound = 10;
    const hash_Password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_Password,
    });
    res.status(200).json({
      message: "Registration Succesful",
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Error during registration:", error);
    if (error.code === 11000) {
      const duplicateKey = Object.keys(error.keyPattern)[0];
      return res
        .status(400)
        .json({ message: `${duplicateKey} already exists` });
    }

    res.status(500).json("internal server error");
  }
};

// user login logic

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await userExist.comaparepassword(password);
    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Succesful",
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// user logic to send user data
const user = async (req, res) => {
  try {
    const userdata = req.user;
    console.log(userdata);
    return res.status(200).json({ userdata });
  } catch (error) {
    console.log(`Error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
