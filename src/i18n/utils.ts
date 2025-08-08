import { ui, defaultLang, secondaryLang } from './ui';
import type { NavRoute } from '../interfaces/navegationRouteType';

/**
 * Extracts the language code from the given URL's pathname.
 * If the language code is not present or not supported, returns the default language.
 * 
 * @param url - The URL object from which to extract the language code.
 * @returns The language code as a key of the `ui` object.
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Returns a translation function for the specified language.
 * The returned function takes a translation key and returns the corresponding translation string.
 * If the key does not exist in the specified language, it falls back to the default language.
 * 
 * @param lang - The language code as a key of the `ui` object.
 * @returns A function that takes a translation key and returns the translation string.
 */
export function getTranslation(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)[key] || ui[defaultLang][key];
  }
}

/**
 * Generates a localized URL path based on the current language
 * @param lang - Current language (from getLangFromUrl)
 * @param path - The path without language prefix (e.g., '/about', '/project', '/education')
 * @returns Properly formatted URL with language prefix if needed
 */
export function getLocalizedUrl(lang: string, path: string = '') {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For default language (en), don't add language prefix
  if (lang === defaultLang) {
    return normalizedPath ? `/${normalizedPath}` : '/';
  }
  
  // For secondary language (es), add language prefix
  return normalizedPath ? `/${lang}/${normalizedPath}` : `/${lang}`;
}

/**
 * Gets the alternate language for language switching
 * @param currentLang - Current language
 * @returns The alternate language code
 */
export function getAlternateLanguage(currentLang: string) {
  return currentLang === defaultLang ? secondaryLang : defaultLang;
}

/**
 * Gets the URL for switching to the alternate language, preserving the current path
 * @param currentLang - Current language
 * @param currentUrl - Current URL object
 * @returns URL for the alternate language
 */
export function getLanguageSwitchUrl(currentLang: string, currentUrl: URL) {
  const alternateLang = getAlternateLanguage(currentLang);
  
  // Extract the path without language prefix
  let pathWithoutLang = currentUrl.pathname;
  
  // Remove language prefix if present
  if (currentLang !== defaultLang) {
    pathWithoutLang = pathWithoutLang.replace(`/${currentLang}`, '') || '/';
  }
  
  // Remove leading slash for getLocalizedUrl
  const cleanPath = pathWithoutLang === '/' ? '' : pathWithoutLang.slice(1);
  
  return getLocalizedUrl(alternateLang, cleanPath);
}

/**
 * Gets the formatted language display text
 * @param currentLang - Current language
 * @returns Formatted language text for display
 */
export function getLanguageDisplayText(currentLang: string) {
  const alternateLang = getAlternateLanguage(currentLang);
  return alternateLang.toUpperCase();
}

/**
 * Checks if the current path matches the given route (language-agnostic)
 * @param currentPath - Current URL pathname
 * @param route - Route to check against (without language prefix)
 * @returns Boolean indicating if the route is active
 */
export function isActiveRoute(currentPath: string, route: string = '') {
  // Remove language prefix from current path
  const pathWithoutLang = currentPath.replace(/^\/es/, '').replace(/^\/$/, '') || '/';
  const normalizedRoute = route ? `/${route}` : '/';
  
  if (normalizedRoute === '/') {
    return pathWithoutLang === '/';
  }
  
  return pathWithoutLang.includes(normalizedRoute);
}

/**
 * Gets the standard navigation routes configuration
 * @returns Array of navigation route configurations
 */
export function getNavRoutes(): NavRoute[] {
  return [
    {
      path: '',
      translationKey: 'experience' as keyof typeof ui[typeof defaultLang]['nav'],
      ariaLabel: 'Experience section',
      transitionName: 'nav-link-experience'
    },
    {
      path: 'about',
      translationKey: 'about' as keyof typeof ui[typeof defaultLang]['nav'],
      ariaLabel: 'About section',
      transitionName: 'nav-link-about'
    },
    {
      path: 'project',
      translationKey: 'projects' as keyof typeof ui[typeof defaultLang]['nav'],
      ariaLabel: 'Project section',
      transitionName: 'nav-link-projects'
    },
    {
      path: 'education',
      translationKey: 'education' as keyof typeof ui[typeof defaultLang]['nav'],
      ariaLabel: 'Education section',
      transitionName: 'nav-link-education'
    }
  ];
}