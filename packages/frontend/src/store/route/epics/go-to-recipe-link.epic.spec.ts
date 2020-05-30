import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { foodDetailsSelectRecipe, recipeItemClicked } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { goToRecipeLink$ } from './go-to-recipe-link.epic';

describe.each([
  foodDetailsSelectRecipe('r1'),
  recipeItemClicked('r1')
])('goToRecipeLink$', (action) => {
  let mockWindowOpen: jest.SpyInstance;

  beforeEach(() =>  {
    mockWindowOpen = jest
      .spyOn(window, 'open').mockImplementation();
    mockWindowOpen.mockClear();
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

    test('calls window open with the recipes url', () =>
      expect(mockWindowOpen).toHaveBeenCalledWith(linkUrl, '_blank'));
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

    test('does not window open', () =>
      expect(mockWindowOpen).not.toHaveBeenCalled());
  });
});
