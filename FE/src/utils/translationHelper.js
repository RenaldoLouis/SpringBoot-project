import LS_KEYS from '../constants/localStorage';

export const saveSiteLanguageInLS = (language) => {
  localStorage.setItem(LS_KEYS.SITE_LANGUAGE_KEY, language);
};

export const getSiteLanguageInLS = () => localStorage.getItem(LS_KEYS.SITE_LANGUAGE_KEY) ?? 'en';
