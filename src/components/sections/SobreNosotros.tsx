import React from 'react';
import { Cpu, UserCheck, Users, GraduationCap, MapPin, Award } from 'lucide-react';
import { aboutCopy, clinicValuesData } from '../../data/values';
import { teamImages } from '../../assets/img';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const SobreNosotros: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const renderValueIcon = (iconName: string) => {
    const strokeWidth = 1.75;
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-6 h-6 text-[#C9A227]" strokeWidth={strokeWidth} />;
    }
  };

  return (
    <section
      id="la-clinica"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FAF6EF] relative border-t border-[#0F1A3C]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column container with subtle fade + scale animation as requested */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center transition-all duration-700 ${
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-[0.98] translate-y-8'
          }`}
        >
          {/* Left Column: Image with Specialist & The Point Context */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative">
              {/* Doctor Portrait Container with true 9:15 / 9:16 proportions */}
              <div className="relative rounded-sm overflow-hidden border border-[#0F1A3C]/15 shadow-xl bg-white aspect-[9/15] sm:aspect-[9/14] lg:aspect-[9/15] w-full max-w-md mx-auto group">
                <img
                  src={teamImages.drJuanJordan}
                  alt="Dr. Juan Jordan - Periodoncista en Clínica Dental Markowitz The Point Guayaquil"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom vignette to blend naturally */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F1A3C]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating minimal specialty chip on top left */}
                <div className="absolute top-3 left-3 bg-[#0F1A3C]/90 backdrop-blur-xs text-[#C9A227] text-[11px] font-sans font-semibold px-3 py-1 rounded-xs border border-[#C9A227]/40 shadow-xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Equipo Clínico</span>
                </div>
              </div>

              {/* Informative Credential Card placed cleanly underneath so it does NOT cover the doctor's arms */}
              <div className="max-w-md mx-auto bg-white p-4 rounded-sm border border-[#0F1A3C]/10 shadow-xs flex items-center justify-between mt-3">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C9A227] font-sans">
                    Especialista en Periodoncia
                  </span>
                  <h4
                    className="font-serif text-lg font-bold text-[#0F1A3C] leading-tight"
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                  >
                    Dr. Juan Jordan
                  </h4>
                  <p className="text-xs text-[#1B2340]/70 font-sans mt-0.5">
                    Periodoncia, Implantes y Salud Gingival · The Point
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#FAF6EF] border border-[#C9A227]/40 text-[#0F1A3C] text-[11px] font-medium font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Guayaquil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & The 4 Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs font-medium uppercase tracking-widest">
                <span>{aboutCopy.heading}</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2340] tracking-tight leading-[1.15]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                {aboutCopy.title}
              </h2>
              {/* Exact copy word by word */}
              <p className="text-base sm:text-lg text-[#1B2340]/85 font-sans leading-relaxed">
                {aboutCopy.text}
              </p>
            </div>

            {/* The 4 Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {clinicValuesData.map((val) => (
                <div
                  key={val.id}
                  className="bg-white p-5 rounded-sm border border-[#0F1A3C]/10 hover:border-[#C9A227]/70 transition-all duration-300 shadow-2xs group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#C9A227]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#C9A227] transition-all">
                      {renderValueIcon(val.icon)}
                    </div>
                    <div>
                      <h3
                        className="text-base font-serif font-bold text-[#1B2340] mb-1"
                        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                      >
                        {val.title}
                      </h3>
                      <p className="text-xs text-[#1B2340]/75 font-sans leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Personalized Aligners Kit */}
            <div className="p-4 rounded-sm bg-[#0F1A3C]/5 border-l-3 border-[#C9A227] flex items-center justify-between text-xs font-sans text-[#1B2340]">
              <p>
                <span className="font-semibold text-[#0F1A3C]">Diferencial exclusivo:</span> Cada tratamiento de alineadores incluye un kit personalizado para el mantenimiento y la higiene diaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
