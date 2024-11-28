const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  createdOn: { type: Date, default: Date.now },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
