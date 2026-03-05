// server/services/questionGenerator.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateQuestions = async (text) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Create 5 multiple choice questions based on the following text. 
    Format each question as follows:
    Question text followed by options labeled as A, B, C, D.
    Each question should be separated by a newline.
    Text: ${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawQuestions = response.text().split('\n\n');

    const questions = rawQuestions
      .filter(q => q.trim())
      .map(questionText => ({
        text: questionText.trim(),
        options: ['A', 'B', 'C', 'D'],
        correctOption: 0 // Default to A, you might want to ask AI for correct answer separately
      }));

    return questions.slice(0, 5); // Ensure we only return 5 questions
  } catch (error) {
    console.error('Question generation error:', error);
    throw new Error('Failed to generate questions');
  }
};

module.exports = { generateQuestions };
