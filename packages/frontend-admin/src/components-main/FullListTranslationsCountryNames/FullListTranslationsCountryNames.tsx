import React, { FC } from 'react';
import {
  getAllCountries,
  deleteTranslationsCountryName,
  getAllTranslationsCountryNames
} from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

export interface ITranslationsCountryNameViewItem extends ITranslationsCountryName {
  countryName: string | undefined;
}

const FullListTranslationsCountryNamesInner: FC<
  IGetAuthorizedBackendDataProps<ITranslationsCountryNameViewItem[]>
> = ({
  items,
  reload
}) => (
  <FullList
    title='Translations Country Names'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.countryName} - ${
      item.languages ? item.languages.join(', ') : ''
    } - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.TRANSLATIONS_COUNTRY_NAME}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteTranslationsCountryName(item.id).then((result) => {
      if (reload) {
        reload();
      }
      return result as ITranslationsCountryNameViewItem;
    })}
  />
);

export const FullListTranslationsCountryNames: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListTranslationsCountryNamesInner}
    requestDataMethod={async () => {
      const [
        translations,
        countries
      ] = await Promise.all([
        getAllTranslationsCountryNames(),
        getAllCountries()
      ]);
      return translations.map((translation) => {
        const matchingCountry =
          countries.find((country) => translation.countryId === country.id);
        return {
          ...translation,
          countryName: matchingCountry && matchingCountry.name
        };
      }).sort((a, b) => (
        (a && a.countryName ? a.countryName : '') < (b && b.countryName ? b.countryName : '')
          ? -1 : 1
      ));
    }}
    />;
