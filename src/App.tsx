import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { Tratamientos } from './components/sections/Tratamientos';
import { SobreNosotros } from './components/sections/SobreNosotros';
import { Testimonios } from './components/sections/Testimonios';
import { Contacto } from './components/sections/Contacto';
import { MessageCircle } from 'lucide-react';
import { clinicData } from './data/clinic';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#1B2340] font-sans antialiased selection:bg-[#C9A227] selection:text-[#0F1A3C]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections in the Exact Mandated Order */}
      <main className="flex-grow">
        {/* 1. Hero (100vh) */}
        <Hero />

        {/* 2. Por qué elegirnos */}
        <WhyUs />

        {/* 3. Tratamientos (galería/grid) */}
        <Tratamientos />

        {/* 4. Sobre nosotros / La Clínica (preview) */}
        <SobreNosotros />

        {/* 5. Testimonios (carrusel loop continuo con placeholders pendientes explícitos) */}
        <Testimonios />

        {/* 6. Ubicación y contacto */}
        <Contacto />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Speed Dial on bottom-right */}
      <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={clinicData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0F1A3C] text-white shadow-xl border-2 border-[#C9A227] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A227]/50"
          aria-label="Chatear con Clínica Dental Markowitz en WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-[#C9A227] group-hover:scale-110 transition-transform" />

          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-[#0F1A3C] text-[#FAF6EF] text-xs font-sans font-medium px-3 py-1.5 rounded-sm whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#C9A227]/40 hidden sm:block">
            ¿Deseas agendar tu cita?
          </span>

          {/* Pulse notification dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C9A227] border-2 border-[#0F1A3C]" />
          </span>
        </a>
      </aside>
    </div>
  );
}
