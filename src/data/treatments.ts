import { TreatmentItem } from '../types';
import { treatmentsImages } from '../assets/img';

export const treatmentsData: TreatmentItem[] = [
  {
    id: 'ortodoncia-alineadores',
    title: 'Ortodoncia con alineadores transparentes',
    description:
      'Movimientos progresivos y planificados, con un kit de accesorios personalizado para el cuidado diario de tus alineadores.',
    icon: 'Sparkles',
    badge: 'Kit Personalizado',
    image: treatmentsImages.aligners,
    highlights: [
      'Estética discreta y removible',
      'Sin brackets metálicos ni molestias',
      'Kit de cuidado y mantenimiento incluido',
    ],
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description:
      'Tratamiento y prevención de las encías a cargo de un especialista certificado, para una base sólida antes de cualquier tratamiento estético.',
    icon: 'ShieldCheck',
    badge: 'Dr. Juan Jordan',
    image: treatmentsImages.periodontics,
    highlights: [
      'Diagnóstico temprano de soporte óseo',
      'Salud gingival predecible',
      'Especialista certificado a cargo',
    ],
  },
  {
    id: 'cirugia-maxilofacial',
    title: 'Cirugía Maxilofacial',
    description:
      'Procedimientos quirúrgicos especializados en un entorno clínico equipado y coordinado con el resto de tu tratamiento.',
    icon: 'Activity',
    badge: 'Quirófano Equipado',
    image: treatmentsImages.maxillofacial,
    highlights: [
      'Extracciones complejas y cordales',
      'Cirugía guiada mínimamente invasiva',
      'Protocolos estrictos de bioseguridad',
    ],
  },
  {
    id: 'implantes-dentales',
    title: 'Implantes dentales',
    description:
      'Reemplazo de piezas dentales con planificación guiada por escaneo digital, para un ajuste más predecible.',
    icon: 'Layers',
    badge: 'Planificación Guiada',
    image: treatmentsImages.implants,
    highlights: [
      'Biocompatibilidad y titanio de alta gama',
      'Posicionamiento guiado digitalmente',
      'Recuperación estética y funcional completa',
    ],
  },
  {
    id: 'escaneo-intraoral-3d',
    title: 'Escaneo intraoral 3D',
    description:
      'Diagnóstico digital sin moldes de impresión incómodos, con visualización inmediata del punto de partida de tu tratamiento.',
    icon: 'Scan3D',
    badge: 'Sin Moldes de Yeso',
    image: treatmentsImages.scanner3d,
    highlights: [
      'Cero pastas ni náuseas por impresión',
      'Modelo tridimensional de alta resolución',
      'Explicación visual en vivo de tu caso',
    ],
  },
  {
    id: 'limpieza-profilaxis',
    title: 'Limpieza y profilaxis',
    description:
      'Eliminación de acumulaciones y mantenimiento preventivo para una salud bucal a largo plazo.',
    icon: 'Sparkle',
    badge: 'Prevención Clave',
    image: treatmentsImages.cleaning,
    highlights: [
      'Ultrasonido suave para remover sarro',
      'Pulido dental no abrasivo',
      'Evaluación preventiva integral',
    ],
  },
];
