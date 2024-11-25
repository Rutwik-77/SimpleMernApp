/** @format */
require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const ContactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-route");
const connectdb = require("./utils/db");
const errormiddleware = require("./middleware/error-middleware");

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173", // specify the origin of the client side application
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true, // allows the client to send cookies
};
app.use(cors(corsOptions)); // for enabling cors
app.use(express.json());

// the below code is to mount the router code in the expreesss app
app.use("/api/auth", authRoute);
app.use("/api/form", ContactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRoute);



app.use(errormiddleware);
const PORT = 5000;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
