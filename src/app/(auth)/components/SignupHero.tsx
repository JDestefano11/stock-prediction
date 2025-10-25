import React from 'react';

export default function SignupHero() {
  return (
    <>
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Join the Future of
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] bg-clip-text text-transparent block mt-2"> Smart Trading</span>
        </h1>
        <p className="text-lg text-[#B0BEC5] leading-relaxed max-w-xl">
          Join thousands of traders using AI-powered insights to make smarter investment decisions and maximize returns.
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-5">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00E676]/40 transition-all">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00E676]/20 to-[#00E676]/5 border border-[#00E676]/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#00E676]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">Real-time Market Analysis</span>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/40 transition-all">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 border border-[#00D4FF]/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">Smart Predictions</span>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#AB47BC]/40 transition-all">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#AB47BC]/20 to-[#AB47BC]/5 border border-[#AB47BC]/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#AB47BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">Portfolio Optimization</span>
        </div>
      </div>
    </>
  );
}
