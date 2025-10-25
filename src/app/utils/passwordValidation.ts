export interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
  met?: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  colorClass: string; // Tailwind color class
  percentage: number;
}

export const passwordRequirements: PasswordRequirement[] = [
  {
    label: 'At least 8 characters',
    test: (password: string) => password.length >= 8,
  },
  {
    label: 'Contains uppercase letter',
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: 'Contains lowercase letter',
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    label: 'Contains a number',
    test: (password: string) => /\d/.test(password),
  },
  {
    label: 'Contains special character (!@#$%^&*)',
    test: (password: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
  },
];

/**
 * Validates password against all requirements
 * @param password - The password to validate
 * @returns Array of requirements with their met status
 */
export const validatePassword = (password: string): PasswordRequirement[] => {
  return passwordRequirements.map((req) => ({
    ...req,
    met: req.test(password),
  }));
};

/**
 * Checks if password meets all requirements
 * @param password - The password to check
 * @returns true if all requirements are met
 */
export const isPasswordValid = (password: string): boolean => {
  return passwordRequirements.every((req) => req.test(password));
};

/**
 * Calculates password strength score
 * @param password - The password to evaluate
 * @returns PasswordStrength object with score, label, color, and percentage
 */
export const calculatePasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return {
      score: 0,
      label: 'No password',
      colorClass: 'text-gray-400',
      percentage: 0,
    };
  }

  const requirements = validatePassword(password);
  const metCount = requirements.filter((req) => req.met).length;
  const score = metCount;

  // Additional checks for stronger passwords
  let bonusPoints = 0;
  if (password.length >= 12) bonusPoints += 0.5;
  if (password.length >= 16) bonusPoints += 0.5;
  if (/[A-Z].*[A-Z]/.test(password)) bonusPoints += 0.25; // Multiple uppercase
  if (/\d.*\d/.test(password)) bonusPoints += 0.25; // Multiple numbers

  const finalScore = Math.min(4, Math.floor(score + bonusPoints));
  const percentage = (metCount / passwordRequirements.length) * 100;

  switch (finalScore) {
    case 0:
    case 1:
      return {
        score: finalScore,
        label: 'Weak',
        colorClass: 'text-red-500',
        percentage,
      };
    case 2:
      return {
        score: finalScore,
        label: 'Fair',
        colorClass: 'text-amber-400',
        percentage,
      };
    case 3:
      return {
        score: finalScore,
        label: 'Good',
        colorClass: 'text-cyan-400',
        percentage,
      };
    case 4:
      return {
        score: finalScore,
        label: 'Strong',
        colorClass: 'text-green-400',
        percentage,
      };
    default:
      return {
        score: 0,
        label: 'Weak',
        colorClass: 'text-red-500',
        percentage,
      };
  }
};

/**
 * Gets a user-friendly error message for invalid passwords
 * @param password - The password to check
 * @returns Error message or empty string if valid
 */
export const getPasswordError = (password: string): string => {
  if (!password) {
    return 'Password is required';
  }

  const requirements = validatePassword(password);
  const unmetRequirements = requirements.filter((req) => !req.met);

  if (unmetRequirements.length === 0) {
    return '';
  }

  if (unmetRequirements.length === 1) {
    return `Password must have: ${unmetRequirements[0].label.toLowerCase()}`;
  }

  return `Password must meet all requirements`;
};
