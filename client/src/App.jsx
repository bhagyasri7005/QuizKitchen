import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import FacultyDashboard from './pages/facultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import QuizPreview from './pages/quizPreview';
import QuizPage from './pages/quizPage';
import QuizScore from './pages/quizScore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/quiz-preview/:id" element={<QuizPreview />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/score/:id" element={<QuizScore />} />
      </Routes>
    </Router>
  );
}

export default App;