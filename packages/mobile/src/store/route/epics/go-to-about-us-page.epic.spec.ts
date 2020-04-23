import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToAboutUsPage } from '../route.actions';
import { goToAboutUsPage$ } from './go-to-about-us-page.epic';

describe('goToAboutUsPage$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToAboutUsPage$(
      of(goToAboutUsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the about us page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.ABOUT_US
    ));
});
