import React, { FC } from 'react';
import { getAllCountryFoodNameMap, deleteCountryToFoodNameMap, getAllFood, getAllCountries } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

export interface ICountryFoodNameMapViewItem extends ICountryFoodNameMap {
  countryName: string | undefined;
  foodName: string | undefined;
}

const FullListCountryFoodNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryFoodNameMapViewItem[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Country Food Name Map'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.countryName} - ${item.foodName} - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.COUNTRY_FOOD_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteCountryToFoodNameMap(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country as ICountryFoodNameMapViewItem;
    })}
  />
);

export const FullListCountryFoodNameMaps: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListCountryFoodNameMapInner}
    requestDataMethod={async () => {
      const [
        foodNameMaps,
        food,
        countries
      ] = await Promise.all([
        getAllCountryFoodNameMap(),
        getAllFood(),
        getAllCountries()
      ]);
      return foodNameMaps.map((foodNameMap) => {
        const matchingFood =
          food.find((foodItem) => foodNameMap.foodId === foodItem.id);
        const matchingCountry =
          countries.find((country) => foodNameMap.countryId === country.id);
        return {
          ...foodNameMap,
          countryName: matchingCountry && matchingCountry.name,
          foodName: matchingFood && matchingFood.name
        };
      }).sort((a, b) => (
        (a && a.countryName ? a.countryName : '') < (b && b.countryName ? b.countryName : '')
          ? -1 : (
            a.foodName && a.foodName ? a.foodName : ''
          ) < (b && b.foodName ? b.foodName : '')
            ? -1 : 1
      ));
    }}
    />;
