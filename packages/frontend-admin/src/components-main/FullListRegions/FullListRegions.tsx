import React, { FC } from 'react';
import { getAllRegions } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRegion } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

const FullListRegionsInner: FC<IGetAuthorizedBackendDataProps<IRegion[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.code}>
          {item.name}
          <Link to={`${ROUTES.REGION}/${item.code}`}>Edit</Link>
        </div>
      )
    }
  </div>
);
export const FullListRegions = GetAuthorizedBackendData<IRegion[]>(
  FullListRegionsInner,
  getAllRegions
);
