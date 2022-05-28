const UserModel = require("../models/userModel");

async function getAll(req, res) { 
  const users = await UserModel.getAll();
  res.json(users);
}

async function getByID(req, res) {
  const user = await UserModel.getByID(req.params.id);
  res.json(user);
}

async function createUser(req, res) {
  const user = await UserModel.createUser(req.body);
  res.status(201).json(user);
}

module.exports = { getAll, getByID, createUser };