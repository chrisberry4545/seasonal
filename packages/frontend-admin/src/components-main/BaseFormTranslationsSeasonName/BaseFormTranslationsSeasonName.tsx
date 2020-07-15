import React, { FC, useEffect, useState } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsSeasonName, IBaseSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllSeasons } from '@chrisb-dev/seasonal-shared-frontend-utilities';

type ITranslationsSeasonNameFormConfigProps =
  IDataFormConfigProps<ITranslationsSeasonName>;

const initialTranslationsSeasonNameFormConfig: ITranslationsSeasonNameFormConfigProps = {
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

export const BaseFormTranslationsSeasonName: FC<
  IGetAuthorizedBackendDataProps<ITranslationsSeasonName>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ITranslationsSeasonNameFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    seasons: IBaseSeason[]
  ) => {
    const seasonOptions = seasons.map((season) => ({
      label: season.name,
      value: season.id
    }));
    setConfig({
      ...initialTranslationsSeasonNameFormConfig,
      seasonId: {
        options: seasonOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    getAllSeasons().then((seasons) =>
      updateConfigWithDropdowns(seasons)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
