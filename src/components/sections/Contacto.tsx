import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, MessageCircle, Send } from 'lucide-react';
import { clinicData } from '../../data/clinic';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Contacto: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const [formData, setFormData] = useState({
    name: '',
    treatment: 'Ortodoncia/Alineadores',
    preferredTime: 'Mañana (09:00 - 13:00)',
  });

  const treatmentOptions = [
    'Ortodoncia/Alineadores',
    'Periodoncia',
    'Cirugía Maxilofacial',
    'Implantes',
    'Limpieza/Profilaxis',
    'Otro',
  ];

  const preferredTimeOptions = [
    'Mañana (09:00 - 13:00)',
    'Tarde (14:00 - 18:00)',
    'Sábado por la mañana',
    'Cualquier horario disponible',
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanName = formData.name.trim() || 'un paciente interesado';
    // Exact requested WhatsApp message format:
    // "Hola, soy [Nombre]. Me interesa [Tratamiento] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const message = `Hola, soy ${cleanName}. Me interesa ${formData.treatment} y mi horario preferente es ${formData.preferredTime}. ¿Podrían ayudarme a agendar?`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/593996998701?text=${encodedMessage}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FAF6EF] relative border-t border-[#0F1A3C]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1A3C]/5 border border-[#C9A227]/40 text-[#0F1A3C] text-xs font-medium uppercase tracking-widest">
            <span>Agendamiento Directo</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2340] tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Ubicación y contacto
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Elige el tratamiento de tu interés y envía tu solicitud directo al equipo médico de Clínica Dental Markowitz vía WhatsApp.
          </p>
        </div>

        {/* Opposite Side Lateral Slide-in Layout (Left text/form from left, Right map from right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Slide from Left): Info & Form */}
          <div
            className={`lg:col-span-6 space-y-8 transition-all duration-800 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Quick Contact Information Box */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#0F1A3C]/10 shadow-xs space-y-4">
              <h3
                className="font-serif font-bold text-xl text-[#0F1A3C]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Atención en The Point
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#1B2340]/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A227]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <strong className="block text-[#0F1A3C] font-semibold">Dirección:</strong>
                    <span>{clinicData.address}</span>
                    <span className="block text-xs text-[#C9A227] italic mt-0.5">
                      ({clinicData.addressDetails})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <strong className="block text-[#0F1A3C] font-semibold">WhatsApp Oficial:</strong>
                    <a
                      href={clinicData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F1A3C] hover:text-[#C9A227] font-medium transition-colors"
                    >
                      {clinicData.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <strong className="block text-[#0F1A3C] font-semibold">Disponibilidad:</strong>
                    <span className="text-stone-600">{clinicData.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Botón Abrir en Mapa */}
              <div className="pt-2">
                <a
                  href={clinicData.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#FAF6EF] hover:bg-[#0F1A3C] text-[#0F1A3C] hover:text-white border border-[#C9A227]/50 hover:border-[#0F1A3C] text-xs font-semibold tracking-wide transition-all duration-200"
                >
                  <span>Abrir en Mapa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A227]" />
                </a>
              </div>
            </div>

            {/* Dynamic WhatsApp Pre-booking Form */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#0F1A3C]/10 shadow-sm">
              <div className="border-b border-[#0F1A3C]/10 pb-4 mb-6">
                <h4
                  className="font-serif text-xl font-bold text-[#0F1A3C]"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  Solicitud de cita personalizada
                </h4>
                <p className="text-xs text-[#1B2340]/70 font-sans mt-1">
                  Completa tus datos para enviar un mensaje directo y estructurado a nuestro WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-[#0F1A3C] uppercase tracking-wider mb-2"
                  >
                    Tu Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carolina Mendoza"
                    className="w-full px-4 py-3 text-sm bg-[#FAF6EF]/50 border border-[#0F1A3C]/20 rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A227] focus:border-[#C9A227] transition-all text-[#1B2340]"
                  />
                </div>

                {/* Tratamiento de interés */}
                <div>
                  <label
                    htmlFor="treatment"
                    className="block text-xs font-semibold text-[#0F1A3C] uppercase tracking-wider mb-2"
                  >
                    Tratamiento de interés
                  </label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-[#FAF6EF]/50 border border-[#0F1A3C]/20 rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A227] focus:border-[#C9A227] transition-all text-[#1B2340]"
                  >
                    {treatmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Horario preferente */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs font-semibold text-[#0F1A3C] uppercase tracking-wider mb-2"
                  >
                    Horario preferente
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#FAF6EF]/50 border border-[#0F1A3C]/20 rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A227] focus:border-[#C9A227] transition-all text-[#1B2340]"
                  >
                    {preferredTimeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-sm bg-[#0F1A3C] text-white text-sm font-medium tracking-wide border border-[#C9A227] hover:bg-[#1B2340] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A227] group-hover:scale-110 transition-transform" />
                  <span>Enviar solicitud a WhatsApp</span>
                  <Send className="w-3.5 h-3.5 text-white/70" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Slide from Right): Google Maps Embed Centered in The Point Guayaquil */}
          <div
            className={`lg:col-span-6 space-y-4 transition-all duration-800 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white p-3 rounded-sm border border-[#0F1A3C]/15 shadow-md overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[530px] rounded-xs overflow-hidden bg-stone-200">
                <iframe
                  title="Mapa de ubicación de Clínica Dental Markowitz en The Point Guayaquil"
                  src={clinicData.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[105%]"
                />
              </div>

              {/* Caption */}
              <div className="p-3 bg-[#FAF6EF] border-t border-[#0F1A3C]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-sans text-[#1B2340]/80">
                <span>
                  <strong className="text-[#0F1A3C]">The Point:</strong> Puerto Santa Ana, Guayaquil.
                </span>
                <a
                  href={clinicData.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F1A3C] font-semibold hover:text-[#C9A227] transition-colors flex items-center gap-1"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
