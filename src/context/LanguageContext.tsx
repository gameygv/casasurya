import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Acerca de', en: 'About Us' },
  'nav.services': { es: 'Terapias', en: 'Therapies' },
  'nav.events': { es: 'Eventos', en: 'Events' },
  'nav.podcast': { es: 'Podcast', en: 'Podcast' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'cta.donate': { es: 'Donar', en: 'Donate' },
  'footer.newsletter': { es: 'Suscríbete al boletín', en: 'Subscribe to Newsletter' },
  'footer.subscribe': { es: 'Suscribirme', en: 'Subscribe' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
