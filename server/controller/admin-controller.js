/** @format */

const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//-------------------------------------------------------
// GET ALL USERS
// ------------------------------------------------------
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);

    res.status(200).json(users);
    if (!users || !users.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//-------------------------------------------------------
// single user logic to  fetch the data of the single user
// ------------------------------------------------------

const getUserByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//-------------------------------------------------------
// delete the user on clicking the delete button
// ------------------------------------------------------

const deleteUserByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------
// delete the contact on clicking the delete button
// ------------------------------------------------------

const deleteContactByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};


//-------------------------------------------------------
// Edit the user on clicking the delete button
// ------------------------------------------------------

const UpdateUserByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updateData = await User.updateOne({_id: id},{
      $set :updatedUserData,
    })
    return res.status(200).json(updateData);
  } catch (error) {
    next(error);
  }
};

//-------------------------------------------------------
// GET ALL CONTACTS
// ------------------------------------------------------
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);

    res.status(200).json(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(400).json({ message: "Contacts not found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts, deleteUserByID, getUserByID,UpdateUserByID,deleteContactByID };
