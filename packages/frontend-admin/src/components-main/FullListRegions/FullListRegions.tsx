import React, { FC } from 'react';
import { getAllRegions, deleteRegion, getAllCountries } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

export interface IRegionViewItem extends IDbRegion {
  countryName: string | undefined;
}

const FullListRegionsInner: FC<IGetAuthorizedBackendDataProps<IRegionViewItem[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Regions'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.countryName} - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.REGION}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteRegion(item.id).then((region) => {
      if (reload) {
        reload();
      }
      return region as IRegionViewItem;
    })}
  />
);

export const FullListRegions: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListRegionsInner}
    requestDataMethod={async () => {
      const [regions, countries] = await Promise.all([
        getAllRegions(), getAllCountries()
      ]);
      return regions.map((region) => {
        const country =
          countries.find((countryItem) => countryItem.id === region.countryId);
        return {
          ...region,
          countryName: country && country.name
        };
      }).sort((a, b) =>
        (a.countryName || '') < (b.countryName || '')
          ? -1
          : a.name < b.name ? -1 : 1
        );
    }}
    />;
