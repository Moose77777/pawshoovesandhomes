import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  clientName: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Horse' | 'Other';
  content: string;
  rating: number;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: LucideIcon;
  features: string[];
  price: string;
  duration: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: 'Horse' | 'Dog' | 'Cat' | 'Other';
  alt: string;
}