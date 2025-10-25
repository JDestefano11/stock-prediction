'use client';

import React from 'react';
import { validatePassword, calculatePasswordStrength, PasswordRequirement } from '../utils/passwordValidation';

interface PasswordStrengthIndicatorProps {
  password: string;
  showRequirements?: boolean;
}

export default function PasswordStrengthIndicator({ 
  password, 
  showRequirements = true 
}: PasswordStrengthIndicatorProps) {
  const requirements = validatePassword(password);
  const strength = calculatePasswordStrength(password);

  if (!password) {
    return null;
  }

  // Map score to background color classes for the progress bar
  const getBarColorClass = (score: number): string => {
    switch (score) {
      case 0:
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-amber-400';
      case 3:
        return 'bg-cyan-400';
      case 4:
        return 'bg-green-400';
      default:
        return 'bg-red-500';
    }
  };

  return (
    <div className="mt-2 space-y-3">
      {/* Strength Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Password Strength</span>
          <span className={`font-medium ${strength.colorClass}`}>
            {strength.label}
          </span>
        </div>
        <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ease-out rounded-full ${getBarColorClass(strength.score)}`}
            style={{ width: `${strength.percentage}%` }}
          />
        </div>
      </div>

      {/* Requirements Checklist */}
      {showRequirements && (
        <div className="space-y-1.5">
          {requirements.map((req: PasswordRequirement, index: number) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-xs"
            >
              <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                req.met 
                  ? 'bg-[#00E676]/20 border border-[#00E676]' 
                  : 'bg-[#1E293B] border border-[#334155]'
              }`}>
                {req.met && (
                  <svg 
                    className="w-3 h-3 text-[#00E676]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                )}
              </div>
              <span className={`transition-colors ${
                req.met ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {req.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
