import React from 'react';

export default function Home() {
  return (
    <div className="py-12 px-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[var(--primary-blue)]">
        Welcome to Stock Prediction App
      </h1>
      <p className="text-xl text-[var(--mid-gray)] max-w-2xl mx-auto mb-8">
        Your comprehensive tool for market analysis and stock predictions
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md border border-[var(--border-color)]">
          <h2 className="text-2xl font-semibold mb-3 text-[var(--secondary-blue)]">Market Analysis</h2>
          <p className="text-[var(--mid-gray)]">Get insights on current market trends and analysis from expert sources.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-[var(--border-color)]">
          <h2 className="text-2xl font-semibold mb-3 text-[var(--secondary-blue)]">Stock Predictions</h2>
          <p className="text-[var(--mid-gray)]">AI-powered predictions to help you make informed investment decisions.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-[var(--border-color)]">
          <h2 className="text-2xl font-semibold mb-3 text-[var(--secondary-blue)]">Portfolio Tracking</h2>
          <p className="text-[var(--mid-gray)]">Monitor your investments and track performance in real-time.</p>
        </div>
      </div>
    </div>
  );
}
