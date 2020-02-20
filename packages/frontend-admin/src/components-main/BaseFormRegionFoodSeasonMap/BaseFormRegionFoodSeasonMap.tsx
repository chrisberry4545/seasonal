import React, { FC, useState, useEffect } from 'react';
import { IGetAuthorizedBackendDataProps } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { IBaseSeason, getAllSeasons, IFood, IRegion } from '@chrisb-dev/seasonal-shared';
import { getAllFood, getAllRegions } from '../../services';

export interface ITempRegionFoodSeasonMap {
  regionId: string;
  foodId: string;
  seasonIds: string[];
}

type IRegionFoodSeasonMapFormConfigProps =
  IDataFormConfigProps<ITempRegionFoodSeasonMap>;

export const BaseFormRegionFoodSeasonMap: FC<
  IGetAuthorizedBackendDataProps<ITempRegionFoodSeasonMap>
> = ({
  items,
  updateMethod
}) => {
  const [config, setConfig] =
    useState<IRegionFoodSeasonMapFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    regions: IRegion[],
    food: IFood[],
    seasons: IBaseSeason[]
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
    setConfig({
      foodId: {
        options: foodOptions,
        type: 'select'
      },
      regionId: {
        options: regionOptions,
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
      getAllSeasons()
    ]).then(([
      regions, food, seasons
    ]) => updateConfigWithDropdowns(
      regions, food, seasons
    ));
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config} />;
};
