import React from 'react';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1929] via-[#0D1B2A] to-[#1B263B] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.4)]">
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#B0BEC5] mb-8">
            We're working on something amazing!
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#78909C] mb-12 max-w-xl mx-auto">
            This feature is currently under development. We're building something special and can't wait to share it with you.
          </p>

          {/* Progress indicator */}
          <div className="mb-12">
            <div className="w-full max-w-md mx-auto h-2 bg-[#263238] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
            <p className="text-sm text-[#78909C] mt-3">Development in progress...</p>
          </div>

          {/* Back button */}
          <Link 
            href="/"
            className="
              inline-flex items-center space-x-2 
              px-8 py-3 
              bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] 
              text-white font-semibold rounded-xl
              hover:shadow-[0_0_24px_rgba(0,212,255,0.5)]
              transition-all duration-300
              group
            "
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
