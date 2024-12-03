const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Use ObjectId
  isPinned: { type: Boolean, default: false }, // Boolean type
  createdOn: { type: Date, default: Date.now }, // Ensure a timestamp
});

module.exports = mongoose.model("Note", noteSchema);
