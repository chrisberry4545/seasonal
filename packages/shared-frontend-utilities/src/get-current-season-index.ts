import { now } from './now';

export const getCurrentSeasonIndex = (): number => now().getUTCMonth();
