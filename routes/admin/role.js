const express = require("express");
const router = express.Router();
const departmentController = require("../../controllers/roleController");

router
  .route("/")
  .get(departmentController.getAllRoles)
  .post(departmentController.createRole);

module.exports = router;
