import React, { FC } from 'react';
import {
  getAllRegions,
  deleteTranslationsRegionName,
  getAllTranslationsRegionNames
} from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

export interface ITranslationsRegionNameViewItem extends ITranslationsRegionName {
  regionName: string | undefined;
}

const FullListTranslationsRegionNamesInner: FC<
  IGetAuthorizedBackendDataProps<ITranslationsRegionNameViewItem[]>
> = ({
  items,
  reload
}) => (
  <FullList
    title='Translations Region Names'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.regionName} - ${
      item.languages ? item.languages.join(', ') : ''
    } - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.TRANSLATIONS_REGION_NAME}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteTranslationsRegionName(item.id).then((result) => {
      if (reload) {
        reload();
      }
      return result as ITranslationsRegionNameViewItem;
    })}
  />
);

export const FullListTranslationsRegionNames: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListTranslationsRegionNamesInner}
    requestDataMethod={async () => {
      const [
        translations,
        regions
      ] = await Promise.all([
        getAllTranslationsRegionNames(),
        getAllRegions()
      ]);
      return translations.map((translation) => {
        const matchingRegion =
          regions.find((region) => translation.regionId === region.id);
        return {
          ...translation,
          regionName: matchingRegion && matchingRegion.name
        };
      }).sort((a, b) => (
        (a && a.regionName ? a.regionName : '') < (b && b.regionName ? b.regionName : '')
          ? -1 : 1
      ));
    }}
    />;
