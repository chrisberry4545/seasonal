import React, { FC, useEffect, useState } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsBadgeName, IBadge, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllBadges } from '../../services';

type ITranslationsBadgeNameFormConfigProps =
  IDataFormConfigProps<ITranslationsBadgeName>;

const initialTranslationsBadgeNameFormConfig: ITranslationsBadgeNameFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  languages: {
    options: Object.values(LANGUAGES)
      .map((value) => ({ label: value, value })),
    type: 'multiselect',
    validation: [requiredValidation]
  }
};

export const BaseFormTranslationsBadgeName: FC<
  IGetAuthorizedBackendDataProps<ITranslationsBadgeName>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ITranslationsBadgeNameFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    badges: IBadge[]
  ) => {
    const badgeOptions = badges.map((badge) => ({
      label: badge.name,
      value: badge.id
    }));
    setConfig({
      ...initialTranslationsBadgeNameFormConfig,
      badgeId: {
        options: badgeOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    getAllBadges().then((badges) =>
      updateConfigWithDropdowns(badges)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
