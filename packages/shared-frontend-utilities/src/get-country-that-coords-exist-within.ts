import { ICountry, ILatLng } from '@chrisb-dev/seasonal-shared-models';

const isInsidePolygon = (
  point: ILatLng, vs: Array<[number, number]>
): boolean => {
  const x = point.lat;
  const y = point.lng;
  let inside = false;

  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][0];
      const yi = vs[i][1];
      const xj = vs[j][0];
      const yj = vs[j][1];

      const intersect = ((yi > y) !== (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) {
        inside = !inside;
      }
  }

  return inside;
};

export const getCountryThatCoordsExistWithin = (
  countries: ICountry[],
  latLng: ILatLng
): ICountry | undefined =>
  countries.find((country) => country.bounds && isInsidePolygon(latLng, country.bounds));
