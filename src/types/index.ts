export interface StudioSpace {
  id: string;
  slug: string; // e.g. "cyclorama"
  name: string;
  shortDescription: string;
  fullDescription: string;
  dimensions: string;
  ceilingHeight: string;
  powerSupply: string;
  idealFor: string[];
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  includedEquipment: string[];
  thumbnailUrl: string;
  heroImageUrl: string;
  galleryImages: string[];
  faqQuestion: string;
  faqAnswer: string;
}

export interface EquipmentCategory {
  category: string;
  items: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  keyword: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Video Production' | 'Commercial' | 'Photography' | 'Podcast' | 'Social Media';
  client: string;
  spaceUsed: string;
  thumbnailUrl: string;
  summary: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingState {
  isOpen: boolean;
  selectedSpaceSlug: string;
}

export interface Review {
  key?: string;
  name: string;
  username: string;
  role: string;
  body: string;
  img: string;
  rating?: number;
  studioStage?: string;
}
