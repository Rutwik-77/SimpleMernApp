/** @format */

const { z } = require("zod");


const signupschema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be aleast 3 characters" })
    .max(20),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email address" }),
  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "Password must contain atleat 8 characters" })
    .max(20, { message: "Max Contain 400 chacarters" }),
  phone: z
    .string({ required_error: "phone is required" })
    .min(10, { message: "Phone number must containe atleat 10 character" })
    .max(15),
});

module.exports = signupschema;
