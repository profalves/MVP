const userRouter = require("express").Router();

const userController = require("../controllers/userController");

userRouter.get("/users", userController.getAll);

userRouter.get("/users/:id", userController.getByID);

userRouter.post("/users", userController.createUser);

module.exports = userRouter;