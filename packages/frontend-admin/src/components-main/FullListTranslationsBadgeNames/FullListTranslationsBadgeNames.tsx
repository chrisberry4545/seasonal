import React, { FC } from 'react';
import {
  getAllBadges,
  deleteTranslationsBadgeName,
  getAllTranslationsBadgeNames
} from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

export interface ITranslationsBadgeNameViewItem extends ITranslationsBadgeName {
  badgeName: string | undefined;
}

const FullListTranslationsBadgeNamesInner: FC<
  IGetAuthorizedBackendDataProps<ITranslationsBadgeNameViewItem[]>
> = ({
  items,
  reload
}) => (
  <FullList
    title='Translations Badge Names'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => `${item.badgeName} - ${
      item.languages ? item.languages.join(', ') : ''
    } - ${item.name}`}
    getItemEditUrl={(item) => `${ROUTES.TRANSLATIONS_BADGE_NAME}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteTranslationsBadgeName(item.id).then((result) => {
      if (reload) {
        reload();
      }
      return result as ITranslationsBadgeNameViewItem;
    })}
  />
);

export const FullListTranslationsBadgeNames: FC<{}> = () =>
  <GetAuthorizedBackendData
    InnerComponent={FullListTranslationsBadgeNamesInner}
    requestDataMethod={async () => {
      const [
        translations,
        badges
      ] = await Promise.all([
        getAllTranslationsBadgeNames(),
        getAllBadges()
      ]);
      return translations.map((translation) => {
        const matchingBadge =
          badges.find((badge) => (
            translation as ITranslationsBadgeName
          ).badgeId === badge.id);
        return {
          ...translation,
          badgeName: matchingBadge && matchingBadge.name
        };
      }).sort((a, b) => (
        (a && a.badgeName ? a.badgeName : '') < (b && b.badgeName ? b.badgeName : '')
          ? -1 : 1
      )) as ITranslationsBadgeNameViewItem[];
    }}
    />;
