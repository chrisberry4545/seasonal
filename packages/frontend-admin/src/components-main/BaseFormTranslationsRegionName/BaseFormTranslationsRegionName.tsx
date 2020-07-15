import React, { FC, useEffect, useState } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsRegionName, IDbRegion, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllRegions } from '../../services';

type ITranslationsRegionNameFormConfigProps =
  IDataFormConfigProps<ITranslationsRegionName>;

const initialTranslationsRegionNameFormConfig: ITranslationsRegionNameFormConfigProps = {
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

export const BaseFormTranslationsRegionName: FC<
  IGetAuthorizedBackendDataProps<ITranslationsRegionName>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ITranslationsRegionNameFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    regions: IDbRegion[]
  ) => {
    const regionOptions = regions.map((region) => ({
      label: region.name,
      value: region.id
    }));
    setConfig({
      ...initialTranslationsRegionNameFormConfig,
      regionId: {
        options: regionOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    getAllRegions().then((regions) =>
      updateConfigWithDropdowns(regions)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
