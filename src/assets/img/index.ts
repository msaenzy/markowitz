/**
 * Centralized image asset registry for Clínica Dental Markowitz.
 * Structured by: hero/, equipo/, tratamientos/, logo/
 * Uses curated, high-resolution photography of modern dental clinics and digital dentistry.
 */

export const heroImages = {
  // Consultorio moderno con luz natural y tecnología digital visible
  mainClinic: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
  detailClinic: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
};

export const treatmentsImages = {
  // Ortodoncia con alineadores transparentes
  aligners: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
  // Periodoncia y cuidado de encías
  periodontics: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  // Cirugía Maxilofacial
  maxillofacial: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  // Implantes dentales con planificación guiada
  implants: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  // Escaneo intraoral 3D
  scanner3d: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  // Limpieza y profilaxis profunda
  cleaning: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
};

import doctorImg from './doctor.jpg';

export const teamImages = {
  // Dr. Juan Jordán - Periodoncista
  drJuanJordan: doctorImg || "/doctor.jpg",
  // Clínica en The Point / Arquitectura y consultorio
  clinicOffice: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
};

export const logoImages = {
  // Nota: Pendiente reemplazar con el archivo vectorial oficial de Clínica Markowitz cuando esté disponible
  fallbackSvg: null,
};
