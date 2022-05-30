const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/users", userController.getAll);

userRouter.get("/users/:id", userController.getByID);

userRouter.post("/users", userController.createUser);

module.exports = userRouter;