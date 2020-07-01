import { ICountry, ILatLng } from '@chrisb-dev/seasonal-shared-models';
import { getCountryThatCoordsExistWithin } from './get-country-that-coords-exist-within';

describe('getCountryThatCoordsExistWithin', () => {
  const countries = [
    { bounds: [ [0, 0], [0, 50], [50, 50], [50, 0] ] },
    { bounds: [ [100, 100], [100, 150], [150, 150], [150, 100] ] }
  ] as ICountry[];

  test('returns nothing if the country has no bounds', () =>
    expect(getCountryThatCoordsExistWithin([{}] as ICountry[], {
      lat: 125,
      lng: 125
    } as ILatLng)).toBeUndefined());

  test('returns nothing if the coords are outside any countries bounds', () =>
    expect(getCountryThatCoordsExistWithin(countries, {
      lat: 75,
      lng: 75
    } as ILatLng)).toBeUndefined());

  test('returns the country that the coords are within the bounds of', () =>
    expect(getCountryThatCoordsExistWithin(countries, {
      lat: 125,
      lng: 125
    } as ILatLng)).toBe(countries[1]));

  test('returns the correct country if at the north west edge of the bounds', () =>
    expect(getCountryThatCoordsExistWithin(countries, {
      lat: 100,
      lng: 100
    } as ILatLng)).toBe(countries[1]));

  test('returns the correct country if at the south east edge of the bounds', () =>
    expect(getCountryThatCoordsExistWithin(countries, {
      lat: 49,
      lng: 49
    } as ILatLng)).toBe(countries[0]));

  test('returns the correct country if the country has diagonal bounds', () => {
    const diagonalBoundsCountry = {
      bounds: [
        [500, 500], [550, 550], [600, 500], [450, 550]
      ]
    } as ICountry;
    expect(getCountryThatCoordsExistWithin([
      ...countries,
      diagonalBoundsCountry
    ], {
      lat: 530,
      lng: 530
    } as ILatLng)).toBe(diagonalBoundsCountry);
  });

  test('works as expected with the uk bounds', () => {
    const ukBounds = {
      bounds: [
        [50.874949, 1.386794],
        [53.008001, 2.580195],
        [61.068778, -0.281744],
        [58.283412, -12.666703],
        [49.407281, -13.72139],
        [49.296472, -5.141601]
      ]
    } as ICountry;
    expect(getCountryThatCoordsExistWithin([
      ...countries,
      ukBounds
    ], {
      lat: 51.2917504,
      lng: -2.4903679999999997
    } as ILatLng)).toBe(ukBounds);
  });
});
