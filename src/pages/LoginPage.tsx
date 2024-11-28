import React from 'react';
import { AuthTabs } from '../components/auth/AuthTabs';
import { GraduationCap } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const LoginPage = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/welcome" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            JEE Advanced Practice
          </h1>
          <p className="text-gray-600">
            Login to access practice questions and improve your preparation
          </p>
        </div>
        
        <AuthTabs />
      </div>
    </div>
  );
};