const express = require("express");
const routes = express.Router();

const userController = require("../controllers/userController");

routes.get("/users", userController.getAll);

routes.get("/users/:id", userController.getByID);

routes.post("/users", userController.createUser);

module.exports = routes;