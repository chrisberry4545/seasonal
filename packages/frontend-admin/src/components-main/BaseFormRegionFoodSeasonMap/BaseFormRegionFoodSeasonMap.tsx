import React, { FC, useState, useEffect } from 'react';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { IBaseSeason, getAllSeasons, IFood, IRegion } from '@chrisb-dev/seasonal-shared';
import {
  getAllFood,
  getAllRegions,
  deleteRegionFoodSeasonMap,
  createRegionFoodSeasonMap,
  getAllRegionFoodSeasonMap
} from '../../services';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared';

export interface IRegionFoodSeasonMapForm {
  regionId: string;
  foodId: string;
  seasonIds: string[];
}

type IRegionFoodSeasonMapFormConfigProps =
  IDataFormConfigProps<IRegionFoodSeasonMapForm>;

export const BaseFormRegionFoodSeasonMap: FC<{}> = () => {
  const [itemData, setItemData] =
    useState<Partial<IRegionFoodSeasonMapForm | null>>(null);
  const [config, setConfig] =
    useState<IRegionFoodSeasonMapFormConfigProps | null>(null);
  const [allRegionFoodSeasonMaps, setAllRegionFoodSeasonMaps] =
    useState<IRegionFoodSeasonMap[] | null>(null);

  const updateRegionFoodSeasonMap = async (
    form: IRegionFoodSeasonMapForm
  ) => {
    const existingItemsForRegionAndSeason =
      allRegionFoodSeasonMaps!
        .filter((item) =>
          item.regionId === form.regionId
          && item.foodId === form.foodId
        ).map((item) => item.id);
    const generateItems = (seasonIds: string[]): IRegionFoodSeasonMap[] =>
      seasonIds.map((seasonId) => ({
        foodId: form.foodId,
        regionId: form.regionId,
        seasonId
      }) as IRegionFoodSeasonMap);
    const toCreate = generateItems(form.seasonIds);

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

  const updateSeasonIds = (
    item: Partial<IRegionFoodSeasonMap>,
    previousItem: Partial<IRegionFoodSeasonMap> | null,
    allRegionFoodSeasonMapsResult: IRegionFoodSeasonMap[] | null
  ) => {
    if (
      previousItem === null
      || item.foodId !== previousItem.foodId
      || item.regionId !== previousItem.regionId
    ) {
      const seasonIds = allRegionFoodSeasonMapsResult
        ? allRegionFoodSeasonMapsResult.filter((regionFoodSeason) =>
          regionFoodSeason.regionId === item.regionId
          && regionFoodSeason.foodId === item.foodId
        ).map((regionFoodSeason) => regionFoodSeason.seasonId)
        : undefined;
      return {
        ...item,
        seasonIds
      };
    }
    return item;
  };

  const updateConfigWithDropdowns = (
    regions: IRegion[],
    food: IFood[],
    seasons: IBaseSeason[],
    allRegionFoodSeasonMap: IRegionFoodSeasonMap[]
  ) => {
    const regionOptions = regions.map((region) => ({
      label: region.name,
      value: region.code
    }));
    const foodOptions = food.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    const seasonOptions = seasons.map((season) => ({
      label: season.name,
      value: season.id
    }));
    setItemData(updateSeasonIds({
      ...itemData,
      regionId: regionOptions[0].value,

      foodId: foodOptions[0].value
    }, null, allRegionFoodSeasonMap));
    setConfig({
      ...config,
      regionId: {
        options: regionOptions,
        type: 'select'
      },

      foodId: {
        options: foodOptions,
        type: 'select'
      },

      seasonIds: {
        options: seasonOptions,
        type: 'multiselect'
      }
    });
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
      updateConfigWithDropdowns(
        regions, food, seasons, allRegionFoodSeasonMap
      );
    });
  }, []);

  return itemData && <DataForm item={itemData}
    sendData={updateRegionFoodSeasonMap}
    formConfig={config}
    processItem={(item, previousItem) => updateSeasonIds(
      item, previousItem, allRegionFoodSeasonMaps
    )} />;
};
