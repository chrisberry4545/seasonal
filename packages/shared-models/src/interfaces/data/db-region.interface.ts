export interface IDbRegion {
  id: string;
  code: string;
  name: string;
  lat: number;
  lng: number;
  countryId?: string;
  isDisabled?: boolean;
}
