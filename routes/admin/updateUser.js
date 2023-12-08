const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
// const ROLES_LIST = require('./')
const verifyRoles = require('../../middleware/auth/verifyRoles')

router
  .route("/")
  .post(verifyRoles(5001), usersController.updateUser)

module.exports = router;