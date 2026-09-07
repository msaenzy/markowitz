import React, { useState, useRef } from 'react';
import { Star, AlertCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Testimonios: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="testimonios"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FAF6EF] relative border-t border-[#0F1A3C]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs font-medium uppercase tracking-widest">
            <span>Experiencias de Pacientes</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2340] tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Testimonios
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Opiniones de pacientes que han transformado su sonrisa en Clínica Dental Markowitz.
          </p>

          {/* Pending Notification Notice Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/50 rounded-sm text-xs text-[#0F1A3C] max-w-xl mx-auto text-left font-sans">
            <AlertCircle className="w-4 h-4 text-[#C9A227] shrink-0" />
            <span>
              <strong className="font-semibold">Transparencia:</strong> Sección en fase de recopilación. Por política ética, no publicamos reseñas falsas ni inventadas.
            </span>
          </div>
        </div>

        {/* Carousel Controls for Manual Navigation */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <button
            onClick={handlePrev}
            aria-label="Testimonio anterior"
            className="w-10 h-10 rounded-full border border-[#0F1A3C]/20 bg-white text-[#0F1A3C] hover:border-[#C9A227] hover:bg-[#FAF6EF] flex items-center justify-center transition-all shadow-2xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente testimonio"
            className="w-10 h-10 rounded-full border border-[#0F1A3C]/20 bg-white text-[#0F1A3C] hover:border-[#C9A227] hover:bg-[#FAF6EF] flex items-center justify-center transition-all shadow-2xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Continuous Automatic Horizontal Marquee Loop + Interactive Cards */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-hidden py-4 -my-4 group"
        >
          {/* Subtle gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF6EF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF6EF] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track: Double testimonials data to create seamless endless loop */}
          <div className="animate-marquee flex gap-6 px-4">
            {[...testimonialsData, ...testimonialsData].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[380px] shrink-0 bg-white p-7 rounded-sm border border-[#0F1A3C]/10 hover:border-[#C9A227] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Rating Stars & Placeholder Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C9A227]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-xs bg-[#C9A227]/15 text-[#0F1A3C] font-semibold border border-[#C9A227]/30">
                      Pendiente Real
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 text-[#C9A227]/40 mb-3" />

                  {/* Exact required copy */}
                  <p className="text-xs sm:text-sm text-[#1B2340]/80 font-sans italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Patient metadata footer */}
                <div className="pt-4 border-t border-[#0F1A3C]/5 flex items-center justify-between">
                  <div>
                    <h3
                      className="font-serif font-bold text-sm text-[#1B2340]"
                      style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-[#C9A227] font-sans font-medium">
                      {item.treatment}
                    </p>
                  </div>
                  <span className="text-[10px] text-[#1B2340]/40 font-mono">
                    #{(idx % 4) + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-[#1B2340]/50 font-sans mt-8">
          Pausa el carrusel al pasar el cursor o mantener presionado en pantalla táctil
        </p>
      </div>
    </section>
  );
};
