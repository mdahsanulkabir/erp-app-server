const express = require("express");
const router = express.Router();
const departmentController = require("../../controllers/departmentController");

router
  .route("/")
  .get(departmentController.getAllDepartments)
  .post(departmentController.createDepartment)
  .delete(departmentController.deleteDepartment)
  .patch(departmentController.updateDepartment)

module.exports = router;
