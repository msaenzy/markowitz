import React from 'react';

interface Scanner3DIconProps {
  className?: string;
  strokeWidth?: number;
}

/**
 * Custom 3D Intraoral Digital Scanner Icon.
 * Distinctive differentiator for Clínica Dental Markowitz showcasing precision optical scanning wand and 3D digital mesh rays.
 */
export const Scanner3DIcon: React.FC<Scanner3DIconProps> = ({
  className = 'w-6 h-6',
  strokeWidth = 1.75,
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
      {/* 3D Coordinate / Intraoral Scan Wand & Bounding Mesh */}
      {/* Tooth profile target */}
      <path d="M7 11C5.5 11 4.5 12 4.5 14C4.5 16 5.2 18 6.5 19.5C7.5 20.8 8.5 21 9.5 21C10.5 21 11 19.8 12 19.8C13 19.8 13.5 21 14.5 21C15.5 21 16.5 20.8 17.5 19.5C18.8 18 19.5 16 19.5 14C19.5 12 18.5 11 17 11" />
      {/* Digital scanning laser bar / wand tip */}
      <path d="M4 8L20 8" strokeDasharray="2 2" />
      <path d="M12 2V6" />
      {/* Optical scan wand head */}
      <rect x="9" y="2" width="6" height="4" rx="1" />
      {/* Laser beams projecting downwards */}
      <path d="M8 8L6.5 11" />
      <path d="M12 8V12" />
      <path d="M16 8L17.5 11" />
      {/* 3D mesh points */}
      <circle cx="12" cy="15" r="0.75" fill="currentColor" />
      <circle cx="9" cy="16" r="0.75" fill="currentColor" />
      <circle cx="15" cy="16" r="0.75" fill="currentColor" />
    </svg>
  );
};
