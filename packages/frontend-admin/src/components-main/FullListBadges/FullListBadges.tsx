import React, { FC } from 'react';
import { getAllBadges, deleteBadge } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListBadgesInner: FC<IGetAuthorizedBackendDataProps<IBadge[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Badges'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.BADGES}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteBadge(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country;
    })}
  />
);

export const FullListBadges = GetAuthorizedBackendData<IBadge[]>(
  FullListBadgesInner,
  getAllBadges
);
