import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { foodDetailsSelectRecipe, recipeItemClicked } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { goToRecipeLink$ } from './go-to-recipe-link.epic';

describe.each([
  foodDetailsSelectRecipe('r1'),
  recipeItemClicked('r1')
])('goToRecipeLink$', (action) => {
  let mockGoToLinkUrl: jest.SpyInstance;

  beforeEach(() =>  {
    mockGoToLinkUrl = jest
      .spyOn(helpers, 'goToLinkUrl')
      .mockReturnValue();
    mockGoToLinkUrl.mockClear();
  });

  describe('when a recipe exists', () => {
    const linkUrl = 'http://link.com';

    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectRecipeById')
        .mockReturnValue((() => ({
          linkUrl
        } as IRecipe)) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls goToLinkUrl with the recipes url', () =>
      expect(mockGoToLinkUrl).toHaveBeenCalledWith(linkUrl));
  });

  describe('when a recipe does not exist', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectRecipeById')
        .mockReturnValue((() => undefined) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not call goToLinkUrl', () =>
      expect(mockGoToLinkUrl).not.toHaveBeenCalled());
  });
});
