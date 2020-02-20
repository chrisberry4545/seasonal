import React, { FC } from 'react';
import { createRegionFoodSeasonMap } from '../../services';
import {
  ITempRegionFoodSeasonMap,
  BaseFormRegionFoodSeasonMap
} from '../BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';

const createEmptyItem = (): ITempRegionFoodSeasonMap => ({
  foodId: '',
  regionId: '',
  seasonIds: []
} as ITempRegionFoodSeasonMap);

export const CreateRegionFoodSeasonMapForm: FC<{}> = () =>
  <BaseFormRegionFoodSeasonMap
    items={createEmptyItem()}
    updateMethod={createRegionFoodSeasonMap} />;
