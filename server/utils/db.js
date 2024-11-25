/** @format */

const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = process.env.MONGODB_URI;
const URI =
  "mongodb+srv://Rutwik7:Rutwik@cluster0.gye9r.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful");
  } catch (error) {
    console.error("failed conection");
    process.exit(0);
  }
};

module.exports = connectdb;
