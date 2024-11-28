import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 text-center transition-colors duration-200 ${
            activeTab === 'login'
              ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`flex-1 py-2 text-center transition-colors duration-200 ${
            activeTab === 'signup'
              ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Sign Up
        </button>
      </div>
      
      {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};