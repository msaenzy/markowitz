import { TestimonialItem } from '../types';

/**
 * PENDIENTE: Clínica Dental Markowitz no cuenta con reseñas públicas escritas
 * indexadas en su Instagram al momento de esta investigación.
 *
 * Se proporcionan 4 tarjetas placeholder explícitamente marcadas como pendientes,
 * respetando la regla estricta de no inventar nombres ni opiniones ficticias.
 * En cuanto el cliente envíe sus testimonios reales, solo hay que reemplazar
 * estos 4 objetos.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testimonio-1',
    name: 'Paciente por confirmar',
    treatment: 'Ortodoncia con Alineadores',
    quote:
      'Espacio reservado para testimonio real de paciente — Clínica Markowitz debe proporcionar nombre/inicial, tratamiento recibido y comentario antes de publicar el sitio.',
    rating: 5,
    isPending: true,
  },
  {
    id: 'testimonio-2',
    name: 'Paciente por confirmar',
    treatment: 'Periodoncia y Salud Gingival',
    quote:
      'Espacio reservado para testimonio real de paciente — Clínica Markowitz debe proporcionar nombre/inicial, tratamiento recibido y comentario antes de publicar el sitio.',
    rating: 5,
    isPending: true,
  },
  {
    id: 'testimonio-3',
    name: 'Paciente por confirmar',
    treatment: 'Escaneo 3D e Implante Dental',
    quote:
      'Espacio reservado para testimonio real de paciente — Clínica Markowitz debe proporcionar nombre/inicial, tratamiento recibido y comentario antes de publicar el sitio.',
    rating: 5,
    isPending: true,
  },
  {
    id: 'testimonio-4',
    name: 'Paciente por confirmar',
    treatment: 'Cirugía Maxilofacial',
    quote:
      'Espacio reservado para testimonio real de paciente — Clínica Markowitz debe proporcionar nombre/inicial, tratamiento recibido y comentario antes de publicar el sitio.',
    rating: 5,
    isPending: true,
  },
];
