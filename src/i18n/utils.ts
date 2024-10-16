import { ui, defaultLang, secondaryLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getTranslation(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function formatDefautlBaseLanguage(lang: string) {
  return lang == defaultLang ? '' : lang;
}

export function changeLanguage(currentLang: string) {
  return currentLang == defaultLang ? secondaryLang : ''
}

export function formattedLanguage(currentLang: string) {
  return currentLang == defaultLang ? secondaryLang.toLocaleUpperCase() : defaultLang.toLocaleUpperCase();
}