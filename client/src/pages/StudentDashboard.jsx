import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const StudentDashboard = () => {
  // This would come from your API
  const [quizzes] = useState([
    {
      id: 1,
      title: "Introduction to React",
      totalQuestions: 5,
      timeLimit: 15,
      status: "available",
      score: null
    },
    {
      id: 2,
      title: "JavaScript Basics",
      totalQuestions: 5,
      timeLimit: 15,
      status: "completed",
      score: 80
    }
  ]);

  const getStatusBadge = (status, score) => {
    switch (status) {
      case 'completed':
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Score: {score}%
          </Badge>
        );
      case 'available':
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Available
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Quizzes</h1>
          <p className="text-gray-600">Welcome back! Here are your available quizzes.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-md transition-shadow">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{quiz.title}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {quiz.totalQuestions} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {quiz.timeLimit} minutes
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {getStatusBadge(quiz.status, quiz.score)}
                {quiz.status === 'available' && (
                  <Button className="flex items-center gap-2">
                    Start Quiz
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
                {quiz.status === 'completed' && (
                  <Button variant="outline" className="flex items-center gap-2">
                    View Results
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {quizzes.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2">No Quizzes Available</h3>
              <p className="text-gray-600">
                There are no quizzes assigned to you at the moment.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;