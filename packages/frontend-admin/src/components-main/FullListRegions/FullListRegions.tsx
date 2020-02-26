import React, { FC } from 'react';
import { getAllRegions, deleteRegion } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListRegionsInner: FC<IGetAuthorizedBackendDataProps<IDbRegion[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.code}>
          {item.name}
          <Link to={`${ROUTES.REGION}/${ROUTES.EDIT}/${item.code}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteRegion(item.code).then((region) => {
              if (reload) {
                reload();
              }
              return region;
            })
          } />
        </div>
      )
    }
  </div>
);
export const FullListRegions = GetAuthorizedBackendData<IDbRegion[]>(
  FullListRegionsInner,
  getAllRegions
);
