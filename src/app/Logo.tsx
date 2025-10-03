'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
  showText?: boolean;
  href?: string;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  variant = 'default',
  showText = true,
  href = '/',
  className = '',
}) => {
  const sizeMap = {
    small: {
      width: 24,
      height: 24,
      textClass: 'text-lg',
    },
    medium: {
      width: 32,
      height: 32,
      textClass: 'text-xl',
    },
    large: {
      width: 48,
      height: 48,
      textClass: 'text-2xl',
    },
  };

  const { width, height, textClass } = sizeMap[size];
  const logoSrc = size === 'small' ? '/logo-small.svg' : '/logo.svg';
  
  const logoContent = (
    <div className={`flex items-center space-x-1 ${className}`}>
      <Image
        src={logoSrc}
        alt="CrystalTicker Logo"
        width={width}
        height={height}
        priority
      />
      {showText && (
        <span className={`font-bold ${textClass} ${variant === 'white' ? 'text-white' : 'text-[var(--primary-blue)]'}`}>
          CrystalTicker
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
};

export default Logo;