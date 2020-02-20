import React, { FC } from 'react';
import {
  BaseFormRegionFoodSeasonMap,
  ITempRegionFoodSeasonMap
} from '../BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { updateRegionFoodSeasonMap, getSingleRegionFoodSeasonMap } from '../../services';

export const EditRegionFoodSeasonMapForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<ITempRegionFoodSeasonMap>(
    BaseFormRegionFoodSeasonMap,
    () => getSingleRegionFoodSeasonMap(id as string),
    updateRegionFoodSeasonMap
  );
  return <CreatedComponent />;
};
