import React from 'react';
import { ToothIcon } from './ToothIcon';

interface LogoLockupProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  isLightBg?: boolean;
}

/**
 * PENDIENTE: Reemplazar este lockup tipográfico por el logo vectorial real del cliente
 * (archivo SVG oficial) en cuanto esté disponible.
 *
 * Replica fielmente el espíritu del logo circular del Instagram oficial (@clinicadentalmarkowitz):
 * círculo crema (#FAF6EF / #F5EDE0), ícono de diente lineal en dorado champán (#C9A227),
 * y tipografía editorial en mayúsculas 'MARKOWITZ' en Cormorant Garamond.
 */
export const LogoLockup: React.FC<LogoLockupProps> = ({
  variant = 'horizontal',
  className = '',
  isLightBg = true,
}) => {
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Emblem circle */}
        <div className="w-14 h-14 rounded-full bg-[#FAF6EF] border border-[#C9A227]/40 flex items-center justify-center shadow-xs mb-2 transition-transform duration-300 hover:scale-105">
          <ToothIcon className="w-7 h-7 text-[#C9A227]" />
        </div>
        <span
          className={`font-serif tracking-[0.22em] text-xl font-semibold uppercase ${
            isLightBg ? 'text-[#0F1A3C]' : 'text-white'
          }`}
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          MARKOWITZ
        </span>
        <span
          className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium mt-0.5 ${
            isLightBg ? 'text-[#0F1A3C]/70' : 'text-slate-300'
          }`}
        >
          Clínica Dental · Guayaquil
        </span>
      </div>
    );
  }

  // Horizontal variant (default for Navbar)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem circle */}
      <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#C9A227]/50 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105">
        <ToothIcon className="w-5 h-5 text-[#C9A227]" />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.2em] text-lg sm:text-xl font-semibold uppercase leading-tight ${
            isLightBg ? 'text-[#0F1A3C]' : 'text-white'
          }`}
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          MARKOWITZ
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-sans font-medium leading-tight ${
            isLightBg ? 'text-[#0F1A3C]/75' : 'text-[#FAF6EF]/75'
          }`}
        >
          Clínica Dental
        </span>
      </div>
    </div>
  );
};
