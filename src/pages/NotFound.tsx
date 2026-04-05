import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80svh] flex flex-col items-center justify-center text-center px-6">
      <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-8 mx-auto">
        <span className="text-4xl font-black">404</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back home!
      </p>
      <Link 
        to="/" 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
      >
        <Home size={20} />
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
