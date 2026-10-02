import React, { useState } from 'react';

interface OudharaBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
}

export const OudharaBrandLogo: React.FC<OudharaBrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const [imgSrc, setImgSrc] = useState('https://i.imgur.com/Hibii5P.png');
  const [imageError, setImageError] = useState(false);

  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
    hero: 'h-24 sm:h-32',
  }[size];

  const handleImageError = () => {
    if (imgSrc !== '/logo.png') {
      setImgSrc('/logo.png');
    } else {
      setImageError(true);
    }
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {!imageError ? (
        <img
          src={imgSrc}
          alt="OUDHARA Sacred Talismans Logo"
          className={`${heightClasses} w-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-transform duration-300 hover:scale-105`}
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Styled SVG fallback with exact flame and flourish geometry */
        <div className="flex items-center gap-2.5">
          <svg
            className={`${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-10 h-10'} filter drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="30%" stopColor="#ffd700" />
                <stop offset="70%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Outer Sacred Flame Teardrop */}
            <path
              d="M50 10 C50 10, 72 38, 72 58 C72 72, 62 82, 50 82 C38 82, 28 72, 28 58 C28 38, 50 10, 50 10 Z"
              stroke="url(#goldGrad)"
              strokeWidth="4"
              fill="rgba(245,158,11,0.15)"
            />
            {/* Inner Sacred Flame Jewel */}
            <path
              d="M50 26 C50 26, 62 44, 62 58 C62 66, 56 72, 50 72 C44 72, 38 66, 38 58 C38 44, 50 26, 50 26 Z"
              fill="url(#goldGrad)"
            />
            {/* Elegant wing flourishes */}
            <path
              d="M20 62 C32 64, 42 70, 50 72 C58 70, 68 64, 80 62"
              stroke="url(#goldGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M25 86 C36 88, 45 92, 50 94 C55 92, 64 88, 75 86"
              stroke="url(#goldGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          {showText && (
            <span className="font-serif text-2xl font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#ffd54f] to-[#ffb300] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              OUDHARA
            </span>
          )}
        </div>
      )}
    </div>
  );
};
