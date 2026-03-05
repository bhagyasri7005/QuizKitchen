
// server/models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true,
    enum: ['A', 'B', 'C', 'D']
  }],
  correctOption: {
    type: String,
    required: true,
    enum: ['A', 'B', 'C', 'D']
  }
});

// ... rest of the Quiz model remains the same

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questions: [questionSchema],
  timeLimit: {
    type: Number,
    default: 15 // minutes
  },
  pdfContent: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
