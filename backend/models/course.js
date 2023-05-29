const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // Add additional fields as needed
});

module.exports = mongoose.model('Course', courseSchema);
