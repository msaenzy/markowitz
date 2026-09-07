export interface ClinicInfo {
  name: string;
  tagline: string;
  specialties: string[];
  city: string;
  country: string;
  corePromise: string;
  address: string;
  addressDetails: string;
  phone: string;
  phoneDisplay: string;
  whatsappDefaultMessage: string;
  whatsappUrl: string;
  instagramUrl: string;
  googleMapsSearchUrl: string;
  googleMapsEmbedUrl: string;
  businessHours: string;
}

export interface WhyUsFeature {
  number: string;
  title: string;
  description: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  image: string;
  highlights: string[];
}

export interface ClinicValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  isPending: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  treatment: string;
  preferredTime: string;
}
