import { IRegion, ILatLng } from '../interfaces';

const convertDegressToRadians = (
  deg: number
) => deg * (Math.PI / 180);

const distanceBetweenLatLngInKm = (
  latLng1: ILatLng,
  latLng2: ILatLng
) => {
  const dLat = convertDegressToRadians(latLng2.lat - latLng1.lat);
  const dLng = convertDegressToRadians(latLng2.lng - latLng1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(convertDegressToRadians(latLng1.lat))
    * Math.cos(convertDegressToRadians(latLng2.lat))
    * Math.sin(dLng / 2)
    * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const radiusOfEarthInKm = 6371;
  return radiusOfEarthInKm * c;
};

export const getNearestRegionFromLatLng = (
  regions: IRegion[] | undefined,
  latLng: ILatLng
) => regions && regions.reduce((prevRegion, nextRegion) => (
    distanceBetweenLatLngInKm(latLng, prevRegion.latLng)
      < distanceBetweenLatLngInKm(latLng, nextRegion.latLng)
        ? prevRegion
        : nextRegion
  ));
