import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { locale } from 'expo-localization';

export const getLocale = () => locale as LANGUAGES;
