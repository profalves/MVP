const mongoose = require("../config/database");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = UserSchema;