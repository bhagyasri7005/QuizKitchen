// server/routes/quiz.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { auth, facultyOnly } = require('../middleware/auth');
const Quiz = require('../models/Quiz');
const { extractTextFromPDF } = require('../services/pdfService');
const { generateQuestions } = require('../services/questionGenerator');

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

router.post('/create', auth, facultyOnly, upload.single('pdf'), async (req, res) => {
  try {
    const pdfText = await extractTextFromPDF(req.file.buffer);
    const questions = await generateQuestions(pdfText);

    const quiz = new Quiz({
      title: req.body.title || 'New Quiz',
      createdBy: req.user._id,
      questions,
      pdfContent: pdfText
    });

    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/faculty', auth, facultyOnly, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ createdBy: req.user._id });
    res.json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/student', auth, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ active: true });
    res.json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;