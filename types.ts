export type Language = 'it' | 'en';

export interface ContentData {
  nav: {
    about: string;
    education: string;
    experience: string;
    awards: string;
    contact: string;
  };
  hero: {
    role: string;
    scroll: string;
  };
  personal: {
    title: string;
    dobLabel: string;
    phoneLabel: string;
    emailLabel: string;
    majorLabel: string;
    majorValue: string;
  };
  education: {
    title: string;
    items: {
      period: string;
      institution: string;
      degree: string;
      location: string;
    }[];
  };
  experience: {
    title: string;
    items: {
      date: string;
      description: string;
    }[];
  };
  awards: {
    title: string;
    items: {
      date: string;
      name: string;
      issuer: string;
    }[];
  };
  skills: {
    title: string;
    languagesTitle: string;
    languages: {
      name: string;
      level: string;
    }[];
    professionalTitle: string;
    professional: string[];
  };
  interests: {
    title: string;
    list: string[];
  };
}