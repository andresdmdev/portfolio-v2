import { ui, defaultLang } from '../i18n/ui';
/**
 * Navigation route configuration type
 */
export type NavRoute = {
  path: string;
  translationKey: keyof typeof ui[typeof defaultLang]['nav'];
  ariaLabel: string;
  transitionName: string;
};