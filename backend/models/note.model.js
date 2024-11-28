const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  isPinned: { type: Boolean, default: Date.now },
  userId: { type: Date, required: true },
  createdOn: { type: Date, default: Date.now },
});

// Create the User model
const Note = mongoose.model("Note", noteSchema);

// Export the User model
module.exports = Note;
