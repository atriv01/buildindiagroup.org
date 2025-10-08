import type {
  SiteSettings,
  Section,
  Program,
  Initiative,
  Event,
  NewsItem,
  Contact,
  Publication,
  User,
} from '../types';

const STORAGE_KEYS = {
  SITE_SETTINGS: 'site_settings',
  SECTIONS: 'sections',
  PROGRAMS: 'programs',
  INITIATIVES: 'initiatives',
  EVENTS: 'events',
  NEWS: 'news',
  CONTACTS: 'contacts',
  PUBLICATIONS: 'publications',
  USER: 'user',
};

const DEFAULT_SITE_SETTINGS: SiteSettings = {
  title: 'Build India Group',
  tagline: 'cultivating good citizenry',
  logoUrl: '',
  heroTitle: 'Build India Group',
  heroSubtitle: 'Let us together cultivate good citizenry for a healthy nation',
  aboutSummary: 'Build India Group is an NGO building good citizenry consciousness amongst the young across the country. Our objective is to foster good citizenry for a healthy nation with Article 51A of the Constitution dealing with fundamental duties as the foundation.',
  founderMessage: '',
  aboutUsContent: '',
};

const DEFAULT_SECTIONS: Section[] = [
  {
    id: '1',
    title: 'Our Mission',
    content: 'To create positive social change through education, cultural preservation, and community empowerment.',
    order: 1,
  },
  {
    id: '2',
    title: 'Our Vision',
    content: 'A society where every individual has access to quality education and cultural enrichment.',
    order: 2,
  },
];

export const storage = {
  getSiteSettings: (): SiteSettings => {
    const stored = localStorage.getItem(STORAGE_KEYS.SITE_SETTINGS);
    return stored ? JSON.parse(stored) : DEFAULT_SITE_SETTINGS;
  },

  setSiteSettings: (settings: SiteSettings): void => {
    localStorage.setItem(STORAGE_KEYS.SITE_SETTINGS, JSON.stringify(settings));
  },

  getSections: (): Section[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.SECTIONS);
    return stored ? JSON.parse(stored) : DEFAULT_SECTIONS;
  },

  setSections: (sections: Section[]): void => {
    localStorage.setItem(STORAGE_KEYS.SECTIONS, JSON.stringify(sections));
  },

  getPrograms: (): Program[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRAMS);
    return stored ? JSON.parse(stored) : [];
  },

  setPrograms: (programs: Program[]): void => {
    localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(programs));
  },

  getInitiatives: (): Initiative[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.INITIATIVES);
    return stored ? JSON.parse(stored) : [];
  },

  setInitiatives: (initiatives: Initiative[]): void => {
    localStorage.setItem(STORAGE_KEYS.INITIATIVES, JSON.stringify(initiatives));
  },

  getEvents: (): Event[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return stored ? JSON.parse(stored) : [];
  },

  setEvents: (events: Event[]): void => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  },

  getNews: (): NewsItem[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.NEWS);
    return stored ? JSON.parse(stored) : [];
  },

  setNews: (news: NewsItem[]): void => {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
  },

  getContacts: (): Contact[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    return stored ? JSON.parse(stored) : [];
  },

  setContacts: (contacts: Contact[]): void => {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
  },

  addContact: (contact: Omit<Contact, 'id' | 'date'>): void => {
    const contacts = storage.getContacts();
    const newContact: Contact = {
      ...contact,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    contacts.push(newContact);
    storage.setContacts(contacts);
  },

  getPublications: (): Publication[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.PUBLICATIONS);
    return stored ? JSON.parse(stored) : [];
  },

  setPublications: (publications: Publication[]): void => {
    localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(publications));
  },

  getUser: (): User | null => {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    if (stored) return JSON.parse(stored);

    const defaultUser: User = {
      email: 'admin@buildindia.org',
      password: 'admin123',
    };
    storage.setUser(defaultUser);
    return defaultUser;
  },

  setUser: (user: User): void => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  checkAuth: (email: string, password: string): boolean => {
    const user = storage.getUser();
    return user ? user.email === email && user.password === password : false;
  },
};
