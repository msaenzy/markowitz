import React from 'react';
import { whyUsData } from '../../data/whyUs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Scanner3DIcon } from '../ui/Scanner3DIcon';
import { Users, Sparkles, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const getIconForCard = (index: number) => {
    switch (index) {
      case 0:
        return <Scanner3DIcon className="w-7 h-7 text-[#C9A227]" />;
      case 1:
        return <Users className="w-7 h-7 text-[#C9A227]" strokeWidth={1.75} />;
      case 2:
      default:
        return <Sparkles className="w-7 h-7 text-[#C9A227]" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FAF6EF] relative border-t border-[#0F1A3C]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs font-medium uppercase tracking-widest">
            <span>Diferenciadores Clínicos</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2340] tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Por qué elegirnos
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Innovación tecnológica y criterio médico interdisciplinario para ofrecerte una experiencia cómoda, exacta y predecible.
          </p>
        </div>

        {/* 3 Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsData.map((item, index) => {
            const delayMs = index * 200;
            return (
              <div
                key={item.number}
                className={`relative bg-white p-8 sm:p-10 rounded-sm border border-[#0F1A3C]/10 shadow-xs hover:shadow-md hover:border-[#C9A227]/60 transition-all duration-700 group flex flex-col justify-between ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${delayMs}ms`,
                }}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#0F1A3C]/5">
                    <span
                      className="text-2xl font-serif font-bold text-[#C9A227]"
                      style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                    >
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#FAF6EF] border border-[#C9A227]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#C9A227] transition-all duration-300">
                      {getIconForCard(index)}
                    </div>
                  </div>

                  {/* Title (exact copy) */}
                  <h3
                    className="text-xl sm:text-2xl font-serif font-bold text-[#1B2340] mb-4 group-hover:text-[#0F1A3C] transition-colors"
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description (exact copy) */}
                  <p className="text-sm sm:text-base text-[#1B2340]/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle quality check indicator */}
                <div className="pt-6 mt-6 border-t border-[#FAF6EF] flex items-center gap-2 text-xs font-sans text-[#C9A227] font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Estándar Markowitz</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
