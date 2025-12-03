export interface SiteContent {
  general: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    instagram: string;
    twitter: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    missionTitle: string;
    missionText: string;
    impactText: string;
  };
  donate: {
    introText: string;
    binLocations: string[];
    monetaryText: string;
    pickupText: string;
  };
  about: {
    title: string;
    historyText: string;
    partnersText: string;
  };
  events: {
    introText: string;
    featuredEventTitle: string;
    featuredEventText: string;
  };
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export type PageView = 'HOME' | 'DONATE' | 'EVENTS' | 'ABOUT' | 'CONTACT' | 'ADMIN';

export enum AdminSection {
  DASHBOARD = 'DASHBOARD',
  CONTENT = 'CONTENT',
  EVENTS = 'EVENTS',
  SETTINGS = 'SETTINGS',
}