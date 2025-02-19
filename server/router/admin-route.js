/** @format */

const express = require("express");
const adminController = require("../controller/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserByID);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.UpdateUserByID);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserByID);
router
  .route("/contact")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

  router
  .route("/contact/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactByID);

module.exports = router;

/** @format */

// const express = require("express");
// const adminController = require("../controller/admin-controller");
// const authMiddleware = require("../middleware/auth-middleware");
// const adminMiddleware = require("../middleware/admin-middleware");

// const router = express.Router();

// router
//   .route("/users")
//   .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

// router
//   .route("/users/delete/:id")
//   .delete(authMiddleware, adminMiddleware, adminController.deleteUserByID);

// router
//   .route("/contact")
//   .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

// module.exports = router;
