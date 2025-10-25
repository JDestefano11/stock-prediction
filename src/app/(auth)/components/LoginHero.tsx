import React from 'react';

export default function LoginHero() {
  return (
    <>
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Welcome Back to
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] bg-clip-text text-transparent block mt-2"> StockPro AI</span>
        </h1>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#AB47BC]/30 transition-all">
          <div className="text-3xl font-bold text-[#AB47BC] mb-1">$2.4B+</div>
          <div className="text-xs text-[#B0BEC5] font-medium">Assets Analyzed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#FFB300]/30 transition-all">
          <div className="text-3xl font-bold text-[#FFB300] mb-1">24/7</div>
          <div className="text-xs text-[#B0BEC5] font-medium">Market Coverage</div>
        </div>
      </div>

      {/* Quick Access Features */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#00E676]/10 to-transparent border border-[#00E676]/20">
          <svg className="w-6 h-6 text-[#00E676] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-white font-semibold text-sm">Your Portfolio Awaits</h3>
            <p className="text-xs text-[#B0BEC5]">Track performance and insights</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20">
          <svg className="w-6 h-6 text-[#00D4FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <div>
            <h3 className="text-white font-semibold text-sm">New Market Alerts</h3>
            <p className="text-xs text-[#B0BEC5]">Stay updated with real-time signals</p>
          </div>
        </div>
      </div>
    </>
  );
}
