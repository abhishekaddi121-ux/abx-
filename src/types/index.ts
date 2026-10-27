export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
  kpiHighlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  tagline: string;
  badge?: string;
  metric?: string;
  image: string;
  deliverables: string[];
  isVideo?: boolean;
  objective?: string;
  creativeApproach?: string;
  tools?: string[];
  featured?: boolean;
}
