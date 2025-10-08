export interface SiteSettings {
  title: string;
  tagline: string;
  logoUrl: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutSummary: string;
  founderMessage: string;
  aboutUsContent: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Initiative {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'haribol' | 'aikyatan' | 'other';
  details?: string;
}

export interface Pledge {
  language: string;
  text: string;
  transliteration?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  videoUrl?: string;
  type: 'news' | 'video' | 'message';
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  date: string;
}

export interface User {
  email: string;
  password: string;
}
