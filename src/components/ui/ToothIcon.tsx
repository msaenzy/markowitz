import React from 'react';

interface ToothIconProps {
  className?: string;
  strokeWidth?: number;
}

export const ToothIcon: React.FC<ToothIconProps> = ({
  className = 'w-5 h-5 text-[#C9A227]',
  strokeWidth = 1.6,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Refined anatomical dental contour matching premium clinic logo */}
      <path d="M7 3C4.5 3 3 5 3 8C3 11 4 13.5 5 16C5.8 18 6.5 21 8.5 21C10 21 10.5 19 12 19C13.5 19 14 21 15.5 21C17.5 21 18.2 18 19 16C20 13.5 21 11 21 8C21 5 19.5 3 17 3C14.5 3 13.5 4.5 12 4.5C10.5 4.5 9.5 3 7 3Z" />
      <path d="M12 4.5V11" strokeDasharray="1 2" opacity="0.6" />
    </svg>
  );
};
