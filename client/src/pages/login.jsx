import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const [activeRole, setActiveRole] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt for:', activeRole, formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardHeader className="space-y-1 text-center p-6">
          <CardTitle className="text-2xl font-bold">
            Quiz Management System
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <Tabs value={activeRole} onValueChange={setActiveRole}>
            <TabsList className="flex justify-center space-x-4 mb-8 border-b border-gray-200">
              <TabsTrigger value="student" className={`pb-2 ${activeRole === 'student' ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}>Student</TabsTrigger>
              <TabsTrigger value="faculty" className={`pb-2 ${activeRole === 'faculty' ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}>Faculty</TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="student@example.com"
                    className="pl-10 w-full border-gray-300 focus:border-black focus:ring-0"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="pl-10 w-full border-gray-300 focus:border-black focus:ring-0"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  Login as Student
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="faculty">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="faculty@example.com"
                    className="pl-10 w-full border-gray-300 focus:border-black focus:ring-0"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="pl-10 w-full border-gray-300 focus:border-black focus:ring-0"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  Login as Faculty
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
