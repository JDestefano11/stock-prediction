import React from 'react';

interface AuthLayoutProps {
  heroContent: React.ReactNode;
  formContent: React.ReactNode;
}

export default function AuthLayout({ heroContent, formContent }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#0A1929] to-[#132F4C] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-[#00E676] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#AB47BC] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-[#FFB300] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#EC407A] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content - Hidden on mobile */}
          <div className="hidden lg:block text-left space-y-8">
            {heroContent}
          </div>
          
          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              {formContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
