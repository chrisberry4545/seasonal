import React, { FC } from 'react';
import {
  deleteTranslationsSeasonName,
  getAllTranslationsSeasonNames
} from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';
import { getAllSeasons } from '@chrisb-dev/seasonal-shared-frontend-utilities';

export interface ITranslationsSeasonNameViewItem extends ITranslationsSeasonName {
  seasonName: string | undefined;
}

const FullListTranslationsSeasonNamesInner: FC<
  IGetAuthorizedBackendDataProps<ITranslationsSeasonNameViewItem[]>
> = ({
  items,
  reload
}) => (
  <FullList
    title='Translations Season Names'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.seasonName} - ${
      item.languages ? item.languages.join(', ') : ''
    } - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.TRANSLATIONS_SEASON_NAME}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteTranslationsSeasonName(item.id).then((result) => {
      if (reload) {
        reload();
      }
      return result as ITranslationsSeasonNameViewItem;
    })}
  />
);

export const FullListTranslationsSeasonNames: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListTranslationsSeasonNamesInner}
    requestDataMethod={async () => {
      const [
        translations,
        seasons
      ] = await Promise.all([
        getAllTranslationsSeasonNames(),
        getAllSeasons()
      ]);
      return translations.map((translation) => {
        const matchingSeason =
          seasons.find((season) => translation.seasonId === season.id);
        return {
          ...translation,
          seasonName: matchingSeason && matchingSeason.name
        };
      }).sort((a, b) => (
        (a && a.seasonName ? a.seasonName : '') < (b && b.seasonName ? b.seasonName : '')
          ? -1 : 1
      ));
    }}
    />;
