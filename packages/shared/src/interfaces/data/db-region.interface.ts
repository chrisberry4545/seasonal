export interface IDbRegion {
  name: string;
  code: string;
  lat: number;
  lng: number;
  countryId?: string;
  isDisabled?: boolean;
}
