import {
  clickGoToWebVersion,
  goToHomePage,
  expectAndroidLinkToExist,
  expectIOSLinkToExist,
  expectAboutSectionToExist,
  expectWhyEatSeasonalSectionToExist
} from '../support/home-page';
import { expectToBeOnFoodListPage } from '../support/food-list-page';

describe('Home page', () => {
  beforeEach(() => goToHomePage());

  it('can go to food list page', () => {
    clickGoToWebVersion();
    expectToBeOnFoodListPage();
  });

  it('has an android link', () => expectAndroidLinkToExist());

  it('has ios link', () => expectIOSLinkToExist());

  it('has an about section', () => expectAboutSectionToExist());

  it('has an why eat seasonal section', () =>
    expectWhyEatSeasonalSectionToExist());
});
