import React from 'react';
import { MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { heroImages } from '../../assets/img';
import { Scanner3DIcon } from '../ui/Scanner3DIcon';
import { ToothIcon } from '../ui/ToothIcon';

export const Hero: React.FC = () => {
  // Stagger H1 words as requested
  const headlineWords = [
    'Ortodoncia,',
    'periodoncia',
    'y',
    'cirugía',
    'maxilofacial',
    'en',
    'un',
    'solo',
    'lugar',
    'de',
    'Guayaquil',
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-[#FAF6EF] overflow-hidden pt-12 pb-16 lg:py-24"
    >
      {/* Subtle architectural background grid & radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(#C9A227 0.75px, transparent 0.75px), radial-gradient(#0F1A3C 0.75px, #FAF6EF 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Col: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="font-sans font-semibold tracking-wide">The Point · Guayaquil, Ecuador</span>
              <span className="text-[#0F1A3C]/40">|</span>
              <span className="text-xs text-[#0F1A3C]/80">Diagnóstico 3D</span>
            </div>

            {/* H1 with word-by-word staggered entrance */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B2340] leading-[1.12] tracking-tight"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {headlineWords.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 sm:mr-2.5 transition-all duration-700 transform"
                  style={{
                    animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms both`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline: Exact copy */}
            <p className="text-base sm:text-lg text-[#1B2340]/80 font-sans leading-relaxed max-w-2xl">
              En Clínica Dental Markowitz combinamos escaneo digital 3D y planes de tratamiento personalizados para que sepas exactamente qué esperar de tu sonrisa, desde la primera cita.
            </p>

            {/* Micro-differentiators bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans text-[#1B2340]/90">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-sm border border-[#0F1A3C]/10">
                <Scanner3DIcon className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Escáner intraoral 3D</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-sm border border-[#0F1A3C]/10">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Kit personalizado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-sm border border-[#0F1A3C]/10">
                <ToothIcon className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Dr. Juan Jordan</span>
              </div>
            </div>

            {/* CTAs with 300ms delay fade */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              style={{
                animation: 'fadeIn 0.8s ease-out 300ms both',
              }}
            >
              {/* Primary CTA */}
              <a
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#0F1A3C] text-white text-base font-medium tracking-wide shadow-md hover:bg-[#1B2340] border border-[#C9A227] hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A227] group-hover:scale-110 transition-transform" />
                <span>Agendar por WhatsApp</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#tratamientos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-transparent text-[#0F1A3C] text-base font-medium border border-[#0F1A3C]/30 hover:border-[#0F1A3C] hover:bg-[#0F1A3C]/5 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Ver especialidades</span>
                <ChevronDown className="w-4 h-4 text-[#C9A227]" />
              </a>
            </div>

            <p className="text-xs text-[#1B2340]/60 font-sans italic pt-1">
              Atención directa sin intermediarios · Respuesta en minutos por WhatsApp
            </p>
          </div>

          {/* Right Col: High-Tech Modern Clinic Image (No generic cheesy stock smile) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Frame with subtle double-border & champagne corner accents */}
              <div className="relative rounded-sm overflow-hidden border border-[#0F1A3C]/15 shadow-xl bg-white">
                <img
                  src={heroImages.mainClinic}
                  alt="Consultorio dental moderno con luz natural y tecnología de escaneo digital en Clínica Dental Markowitz"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating clinical card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F1A3C]/95 backdrop-blur-md text-white p-4 rounded-sm border border-[#C9A227]/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EF]/10 border border-[#C9A227] flex items-center justify-center shrink-0">
                      <Scanner3DIcon className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <h4
                        className="font-serif text-sm font-semibold tracking-wide text-[#FAF6EF]"
                        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                      >
                        Planificación Digital 3D
                      </h4>
                      <p className="text-[11px] text-white/70 font-sans">
                        Diagnóstico computarizado previo a cualquier intervención
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#C9A227]/30 rounded-sm -z-10 pointer-events-none hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle indicator to scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-[#1B2340]/40 text-xs">
        <a href="#por-que-elegirnos" className="flex flex-col items-center hover:text-[#0F1A3C] transition-colors">
          <span className="text-[10px] tracking-widest uppercase mb-1">Descubrir</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A227]" />
        </a>
      </div>
    </section>
  );
};
