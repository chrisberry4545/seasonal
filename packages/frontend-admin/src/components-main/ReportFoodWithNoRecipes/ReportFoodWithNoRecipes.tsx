import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import { ROUTES } from '../../config';
import { deleteFood } from '../../services';
import { getReportFoodWithNoRecipes } from '../../services/get-report-food-with-no-recipes';

const ReportFoodWithNoRecipesInner: FC<IGetAuthorizedBackendDataProps<IFood[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Food with no recipes'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.FOOD}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteFood(item.id).then((food) => {
      if (reload) {
        reload();
      }
      return food;
    })}
  />
);
export const ReportFoodWithNoRecipes = GetAuthorizedBackendData<IFood[]>(
  ReportFoodWithNoRecipesInner,
  getReportFoodWithNoRecipes
);
