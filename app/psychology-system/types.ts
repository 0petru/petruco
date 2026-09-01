export interface WebsiteExample {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  badgeColor: string;
  previewUrl: string;
  features: string[];
  mockupContent: {
    heroTitle: string;
    heroSubtitle: string;
    specialties: string[];
    aboutExcerpt: string;
    address: string;
    contactAction: string;
  };
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  clinic: string;
  city: string;
  duration: string;
  highlightQuote: string;
  keyMetric: string;
  thumbnailUrl: string;
  videoPreview: string;
}

export interface WrittenReview {
  id: string;
  stars: number;
  quote: string;
  author: string;
  credentials: string;
  location: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AuditFormData {
  fullName: string;
  email: string;
  phone: string;
  clinicOrName: string;
  currentWebsiteOrProfile: string;
  city: string;
  notes?: string;
}
