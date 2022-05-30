const mongoose = require("../../config/database");
const UserSchema = require("./userSchema");

const User = mongoose.model("Users", UserSchema);

async function getAll() {
  return await User.find();
}

async function getByID(id) {
  return await User.findById(id);
}

async function createUser(body) {
  return await User.create(body);
}

module.exports = { getAll, getByID, createUser };