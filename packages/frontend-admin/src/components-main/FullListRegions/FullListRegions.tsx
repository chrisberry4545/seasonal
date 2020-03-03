import React, { FC } from 'react';
import { getAllRegions, deleteRegion } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListRegionsInner: FC<IGetAuthorizedBackendDataProps<IDbRegion[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Regions'
    items={items}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.REGION}/${ROUTES.EDIT}/${item.code}`}
    deleteItemFunc={(item) => deleteRegion(item.code).then((region) => {
      if (reload) {
        reload();
      }
      return region;
    })}
  />
);
export const FullListRegions = GetAuthorizedBackendData<IDbRegion[]>(
  FullListRegionsInner,
  getAllRegions
);
