import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LogoLockup } from '../ui/LogoLockup';
import { clinicData } from '../../data/clinic';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'La Clínica', href: '#la-clinica' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#C9A227]/20 shadow-xs py-3'
          : 'bg-[#FAF6EF] border-b border-[#0F1A3C]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Lockup */}
          <a
            href="#inicio"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-sm"
            aria-label="Ir al inicio de Clínica Dental Markowitz"
          >
            <LogoLockup />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center space-x-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1B2340]/85 hover:text-[#0F1A3C] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Fixed WhatsApp CTA (Visible on mobile & desktop) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={clinicData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm bg-[#0F1A3C] text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs hover:bg-[#1B2340] border border-[#C9A227]/40 hover:border-[#C9A227] transition-all duration-200 active:scale-95 whitespace-nowrap"
              aria-label="Agendar cita por WhatsApp con Clínica Dental Markowitz"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227] shrink-0" />
              <span className="hidden xs:inline">Agendar por WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm text-[#0F1A3C] hover:bg-[#0F1A3C]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#FAF6EF] border-b border-[#C9A227]/30 shadow-lg px-6 py-6 transition-all animate-fadeIn"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1B2340] hover:text-[#C9A227] py-2 border-b border-[#0F1A3C]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-sm bg-[#0F1A3C] text-white text-sm font-medium border border-[#C9A227]"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A227]" />
                <span>Agendar por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
