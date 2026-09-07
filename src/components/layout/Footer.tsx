import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { LogoLockup } from '../ui/LogoLockup';
import { clinicData } from '../../data/clinic';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1A3C] text-white border-t border-[#C9A227]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Promise */}
          <div className="space-y-4">
            <LogoLockup isLightBg={false} />
            <p className="text-xs text-white/70 leading-relaxed font-sans mt-3">
              Ortodoncia, periodoncia y cirugía maxilofacial en un solo equipo,
              con diagnóstico por escaneo digital 3D y planes de tratamiento a tu medida en The Point, Guayaquil.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={clinicData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Clínica Dental Markowitz en Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0F1A3C] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Clínica Dental Markowitz por WhatsApp"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0F1A3C] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Especialidades */}
          <div>
            <h3
              className="text-base font-serif font-semibold tracking-wider text-[#C9A227] uppercase mb-4"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Ortodoncia con alineadores transparentes
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Periodoncia (Dr. Juan Jordan)
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Cirugía Maxilofacial
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Implantes dentales guiados
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Escaneo intraoral 3D de alta precisión
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Limpieza y profilaxis preventiva
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegación */}
          <div>
            <h3
              className="text-base font-serif font-semibold tracking-wider text-[#C9A227] uppercase mb-4"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-white transition-colors">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#la-clinica" className="hover:text-white transition-colors">
                  La Clínica & Valores
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Ubicación & Contacto Directo */}
          <div>
            <h3
              className="text-base font-serif font-semibold tracking-wider text-[#C9A227] uppercase mb-4"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Ubicación & Contacto
            </h3>
            <div className="space-y-3 text-xs text-white/75 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">The Point</p>
                  <p className="text-white/60">Guayaquil, Ecuador</p>
                  <p className="text-[11px] text-[#C9A227]/90 mt-0.5 italic">
                    Torre y oficina pendiente de confirmación
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a
                  href={`tel:${clinicData.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Horario: por confirmar con la clínica
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>
            &copy; {currentYear} Clínica Dental Markowitz. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={clinicData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>@clinicadentalmarkowitz</span>
            </a>
            <a
              href={clinicData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>+593 99 699 8701</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
