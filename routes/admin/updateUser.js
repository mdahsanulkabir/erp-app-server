const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
// const ROLES_LIST = require('./')
const verifyRoles = require('../../middleware/auth/verifyRoles')

router
  .route("/")
  .post(verifyRoles(3001), usersController.updateUser)

  router.patch("/userStatus", verifyRoles(3001), usersController.updateUserStatus)

module.exports = router;