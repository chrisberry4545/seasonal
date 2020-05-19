import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_REPORT_FOOD_WITH_NO_RECIPES } from '../../../config';

generateRestEndpointTests<IFood>({
  path: `/${ENDPOINT_ADMIN_REPORT_FOOD_WITH_NO_RECIPES}`
});
