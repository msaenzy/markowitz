import React from 'react';
import { Sparkles, ShieldCheck, Activity, Layers, Sparkle, ArrowRight, MessageCircle } from 'lucide-react';
import { treatmentsData } from '../../data/treatments';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Scanner3DIcon } from '../ui/Scanner3DIcon';

export const Tratamientos: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const renderIcon = (iconName: string) => {
    const strokeWidth = 1.75;
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'Scan3D':
        return <Scanner3DIcon className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'Sparkle':
      default:
        return <Sparkle className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
    }
  };

  return (
    <section
      id="tratamientos"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FAF6EF] relative border-t border-[#0F1A3C]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs font-medium uppercase tracking-widest">
            <span>Especialidades Odontológicas</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2340] tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Tratamientos
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Abordaje clínico de alta precisión donde la tecnología digital y la odontología especializada se integran en beneficio de tu salud dental.
          </p>
        </div>

        {/* 6 Grid Cards with Staggered 100ms Incremental Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map((item, index) => {
            const delayMs = index * 100;
            const waEncodedText = encodeURIComponent(
              `Hola, me interesa conocer más sobre el tratamiento de ${item.title} en Clínica Dental Markowitz.`
            );
            const waTreatmentUrl = `https://wa.me/593996998701?text=${waEncodedText}`;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-sm border border-[#0F1A3C]/10 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#C9A227] transition-all duration-500 group flex flex-col justify-between ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-[0.98]'
                }`}
                style={{
                  transitionDelay: `${delayMs}ms`,
                }}
              >
                <div>
                  {/* Treatment Photographic Header */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#0F1A3C]/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3C]/80 via-[#0F1A3C]/20 to-transparent" />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-[#0F1A3C]/90 backdrop-blur-xs text-[#C9A227] text-[11px] font-sans font-medium px-2.5 py-1 rounded-xs border border-[#C9A227]/40 shadow-xs">
                        {item.badge}
                      </div>
                    )}

                    {/* Circular Icon in Top Right */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/95 border border-[#C9A227] flex items-center justify-center shadow-md">
                      {renderIcon(item.icon)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <h3
                      className="text-xl sm:text-2xl font-serif font-bold text-[#1B2340] mb-3 group-hover:text-[#0F1A3C] transition-colors leading-snug"
                      style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1B2340]/80 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullet highlights */}
                    <ul className="space-y-1.5 pt-2 border-t border-[#0F1A3C]/5 text-xs text-[#1B2340]/75 font-sans">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with Direct WhatsApp Action */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={waTreatmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-sm bg-[#FAF6EF] hover:bg-[#0F1A3C] text-[#0F1A3C] hover:text-white border border-[#C9A227]/40 hover:border-[#0F1A3C] text-xs font-medium font-sans tracking-wide transition-all duration-200 group/btn"
                    aria-label={`Consultar por WhatsApp sobre ${item.title}`}
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>Consultar este tratamiento</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic CTA note */}
        <div className="mt-14 max-w-2xl mx-auto text-center bg-white p-6 rounded-sm border border-[#C9A227]/40 shadow-xs">
          <p className="text-sm font-sans text-[#1B2340]">
            <span className="font-semibold text-[#0F1A3C]">¿No estás seguro de cuál necesitas?</span>{' '}
            El escaneo intraoral 3D nos permite diagnosticar de forma exacta en tu primera cita sin compromiso.
          </p>
          <div className="mt-4">
            <a
              href="https://wa.me/593996998701?text=Hola%2C%20quisiera%20una%20evaluaci%C3%B3n%20diagn%C3%B3stica%20con%20escaneo%203D%20en%20Cl%C3%ADnica%20Markowitz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F1A3C] hover:text-[#C9A227] transition-colors"
            >
              <span>Solicitar cita diagnóstica vía WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
