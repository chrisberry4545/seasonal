import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_TRANSLATIONS_COUNTRY_NAME } from '../../config';

generateRestEndpointTests<ITranslationsCountryName>({
  path: `/${ENDPOINT_ADMIN_TRANSLATIONS_COUNTRY_NAME}`,
  singleItemId: '6f4182a8-5bd8-45d8-bb7c-076719d209fc',
  validItem: {
    countryId: '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    languages: ['en-US'],
    name: 'US Country Translation'
  } as ITranslationsCountryName,
  validItemForEdit: {
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    languages: ['en-GB'],
    name: 'GB Country Translation'
  } as ITranslationsCountryName
});
