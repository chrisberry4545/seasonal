import React, { FC, useState, useEffect } from 'react';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllSeasons } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  getAllFood,
  getAllRegions,
  deleteRegionFoodSeasonMap,
  createRegionFoodSeasonMap,
  getAllRegionFoodSeasonMap
} from '../../services';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export interface IRegionSeasonFoodMapForm {
  regionId: string;
  seasonId: string;
  foodIds: string[];
}

type IRegionSeasonFoodMapFormConfigProps =
  IDataFormConfigProps<IRegionSeasonFoodMapForm>;

export const BaseFormRegionSeasonFoodMap: FC<{}> = () => {
  const [itemData, setItemData] =
    useState<Partial<IRegionSeasonFoodMapForm | null>>(null);
  const [config, setConfig] =
    useState<IRegionSeasonFoodMapFormConfigProps | null>(null);
  const [allRegionFoodSeasonMaps, setAllRegionFoodSeasonMaps] =
    useState<IRegionFoodSeasonMap[] | null>(null);

  const updateRegionFoodSeasonMap = async (
    form: IRegionSeasonFoodMapForm
  ) => {
    const existingItemsForRegionAndSeason =
      allRegionFoodSeasonMaps!
        .filter((item) =>
          item.regionId === form.regionId
          && item.seasonId === form.seasonId
        ).map((item) => item.id);
    const generateItems = (foodIds: string[]): IRegionFoodSeasonMap[] =>
    foodIds.map((foodId) => ({
        foodId,
        regionId: form.regionId,
        seasonId: form.seasonId
      }) as IRegionFoodSeasonMap);
    const toCreate = generateItems(form.foodIds);

    for (const id of existingItemsForRegionAndSeason) {
      await deleteRegionFoodSeasonMap(id);
    }
    for (const item of toCreate) {
      await createRegionFoodSeasonMap(item);
    }
    const allRegionFoodSeasonMap = await getAllRegionFoodSeasonMap();
    setAllRegionFoodSeasonMaps(allRegionFoodSeasonMap);
    return form;
  };

  const updateFoodIds = (
    item: Partial<IRegionFoodSeasonMap>,
    previousItem: Partial<IRegionFoodSeasonMap> | null,
    allRegionFoodSeasonMapsResult: IRegionFoodSeasonMap[] | null
  ) => {
    if (
      previousItem === null
      || item.seasonId !== previousItem.seasonId
      || item.regionId !== previousItem.regionId
    ) {
      const foodIds = allRegionFoodSeasonMapsResult
        ? allRegionFoodSeasonMapsResult.filter((regionFoodSeason) =>
          regionFoodSeason.regionId === item.regionId
          && regionFoodSeason.seasonId === item.seasonId
        ).map((regionFoodSeason) => regionFoodSeason.foodId)
        : undefined;
      return {
        ...item,
        foodIds
      };
    }
    return item;
  };

  useEffect(() => {
    Promise.all([
      getAllRegions(),
      getAllFood(),
      getAllSeasons(),
      getAllRegionFoodSeasonMap()
    ]).then(([
      regions, food, seasons,
      allRegionFoodSeasonMap
    ]) => {
      setAllRegionFoodSeasonMaps(allRegionFoodSeasonMap);
      const regionOptions = regions.map((region) => ({
        label: region.name,
        value: region.id
      }));
      const foodOptions = food.map((foodItem) => ({
        label: foodItem.name,
        value: foodItem.id
      }));
      const seasonOptions = seasons.map((season) => ({
        label: season.name,
        value: season.id
      }));
      setItemData((data) => updateFoodIds({
        ...data,
        regionId: regionOptions[0].value,

        seasonId: seasonOptions[0].value
      }, null, allRegionFoodSeasonMap));
      setConfig((currentConfig) => ({
        ...currentConfig,
        regionId: {
          options: regionOptions,
          type: 'select'
        },

        seasonId: {
          options: seasonOptions,
          type: 'select'
        },

        foodIds: {
          options: foodOptions,
          type: 'searchable-multiselect'
        }
      }));
    });
  }, [setAllRegionFoodSeasonMaps]);

  return itemData && <DataForm item={itemData}
    sendData={updateRegionFoodSeasonMap}
    formConfig={config}
    processItem={(item, previousItem) => updateFoodIds(
      item, previousItem, allRegionFoodSeasonMaps
    )}
    buttonText='Create'
    goBackOnUpdate={false} />;
};
