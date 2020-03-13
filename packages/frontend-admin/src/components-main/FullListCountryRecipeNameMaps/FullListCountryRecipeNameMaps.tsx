import React, { FC } from 'react';
import { getAllCountryRecipeNameMap, deleteCountryToRecipeNameMap, getAllRecipes, getAllCountries } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

interface ICountryRecipeNameMapViewItem extends ICountryRecipeNameMap {
  countryName: string | undefined;
  recipeName: string | undefined;
}

const FullListCountryRecipeNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryRecipeNameMapViewItem[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Country Recipe Name Map'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.countryName} - ${item.recipeName} - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.COUNTRY_RECIPE_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteCountryToRecipeNameMap(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country as ICountryRecipeNameMapViewItem;
    })}
  />
);

export const FullListCountryRecipeNameMaps = GetAuthorizedBackendData<ICountryRecipeNameMapViewItem[]>(
  FullListCountryRecipeNameMapInner,
  async () => {
    const [
      recipeNameMaps,
      recipes,
      countries
    ] = await Promise.all([
      getAllCountryRecipeNameMap(),
      getAllRecipes(),
      getAllCountries()
    ]);
    return recipeNameMaps.map((recipeNameMap) => {
      const matchingRecipe =
        recipes.find((recipe) => recipeNameMap.recipeId === recipe.id);
      const matchingCountry =
        countries.find((country) => recipeNameMap.countryId === country.id);
      return {
        ...recipeNameMap,
        countryName: matchingCountry && matchingCountry.name,
        recipeName: matchingRecipe && matchingRecipe.name
      };
    }).sort((a, b) => (
      (a && a.countryName ? a.countryName : '') > (b && b.countryName ? b.countryName : '')
        ? -1 : 1
    ));
  }
);
