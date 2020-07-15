import { ROUTES } from '../config';
import {
  CreateBadgePage,
  EditBadgePage,
  ViewBadgesPage,
  CreateCountryPage,
  EditCountryPage,
  ViewCountriesPage,
  CreateFoodPage,
  EditFoodPage,
  ViewFoodPage,
  CreateRecipePage,
  EditRecipePage,
  CreateRegionPage,
  EditRegionPage,
  ViewRegionsPage,
  CreateUserPage,
  EditUserPage,
  ViewUsersPage,
  ViewRecipesPage,
  ViewCountryFoodNameMapsPage,
  ViewCountryRecipeNameMapsPage,
  CreateCountryFoodNameMapPage,
  CreateCountryRecipeNameMapPage,
  EditCountryFoodNameMapPage,
  EditCountryRecipeNameMapPage,
  EditRegionFoodSeasonMapPage,
  ReportFoodWithNoRecipesPage,
  CreateTranslationsCountryNamePage,
  EditTranslationsCountryNamePage,
  ViewTranslationsCountryNamesPage,
  CreateTranslationsBadgeNamePage,
  EditTranslationsBadgeNamePage,
  ViewTranslationsBadgeNamesPage,
  CreateTranslationsRegionNamePage,
  EditTranslationsRegionNamePage,
  ViewTranslationsRegionNamesPage,
  CreateTranslationsSeasonNamePage,
  EditTranslationsSeasonNamePage,
  ViewTranslationsSeasonNamesPage
} from '../components-pages';
import { FunctionComponent } from 'react';

export interface IMainLinkPages {
  createLinkUrl?: string;
  editLinkUrl?: string;
  createPageComponent?: FunctionComponent;
  editPageComponent?: FunctionComponent;
  sectionName: string;
  viewPageComponent: FunctionComponent;
  viewUrl: string;
}

export interface IMainLinkGroup {
  title: string;
  pages: IMainLinkPages[];
}

export const mainLinks: IMainLinkGroup[] = [
  {
    pages: [
      {
        createPageComponent: CreateBadgePage,
        editPageComponent: EditBadgePage,
        sectionName: 'Badges',
        viewPageComponent: ViewBadgesPage,
        viewUrl: ROUTES.BADGES
      },
      {
        createPageComponent: CreateCountryPage,
        editPageComponent: EditCountryPage,
        sectionName: 'Countries',
        viewPageComponent: ViewCountriesPage,
        viewUrl: ROUTES.COUNTRY
      },
      {
        createPageComponent: CreateCountryFoodNameMapPage,
        editPageComponent: EditCountryFoodNameMapPage,
        sectionName: 'Country Food Name Maps',
        viewPageComponent: ViewCountryFoodNameMapsPage,
        viewUrl: ROUTES.COUNTRY_FOOD_NAME_MAP
      },
      {
        createPageComponent: CreateCountryRecipeNameMapPage,
        editPageComponent: EditCountryRecipeNameMapPage,
        sectionName: 'Country Recipe Name Maps',
        viewPageComponent: ViewCountryRecipeNameMapsPage,
        viewUrl: ROUTES.COUNTRY_RECIPE_NAME_MAP
      },
      {
        createPageComponent: CreateFoodPage,
        editPageComponent: EditFoodPage,
        sectionName: 'Food',
        viewPageComponent: ViewFoodPage,
        viewUrl: ROUTES.FOOD
      },
      {
        createPageComponent: CreateRecipePage,
        editPageComponent: EditRecipePage,
        sectionName: 'Recipes',
        viewPageComponent: ViewRecipesPage,
        viewUrl: ROUTES.RECIPE
      },
      {
        createPageComponent: CreateRegionPage,
        editPageComponent: EditRegionPage,
        sectionName: 'Regions',
        viewPageComponent: ViewRegionsPage,
        viewUrl: ROUTES.REGION
      },
      {
        sectionName: 'Region Food Season Maps',
        viewPageComponent: EditRegionFoodSeasonMapPage,
        viewUrl: ROUTES.REGION_FOOD_SEASON_MAP
      },
      {
        createPageComponent: CreateTranslationsBadgeNamePage,
        editPageComponent: EditTranslationsBadgeNamePage,
        sectionName: 'Translations Badge Name',
        viewPageComponent: ViewTranslationsBadgeNamesPage,
        viewUrl: ROUTES.TRANSLATIONS_BADGE_NAME
      },
      {
        createPageComponent: CreateTranslationsCountryNamePage,
        editPageComponent: EditTranslationsCountryNamePage,
        sectionName: 'Translations Country Name',
        viewPageComponent: ViewTranslationsCountryNamesPage,
        viewUrl: ROUTES.TRANSLATIONS_COUNTRY_NAME
      },
      {
        createPageComponent: CreateTranslationsRegionNamePage,
        editPageComponent: EditTranslationsRegionNamePage,
        sectionName: 'Translations Region Name',
        viewPageComponent: ViewTranslationsRegionNamesPage,
        viewUrl: ROUTES.TRANSLATIONS_REGION_NAME
      },
      {
        createPageComponent: CreateTranslationsSeasonNamePage,
        editPageComponent: EditTranslationsSeasonNamePage,
        sectionName: 'Translations Season Name',
        viewPageComponent: ViewTranslationsSeasonNamesPage,
        viewUrl: ROUTES.TRANSLATIONS_SEASON_NAME
      },
      {
        createPageComponent: CreateUserPage,
        editPageComponent: EditUserPage,
        sectionName: 'Users',
        viewPageComponent: ViewUsersPage,
        viewUrl: ROUTES.USER
      }
    ].map((link) => ({
      ...link,
      createLinkUrl: `${link.viewUrl}/${ROUTES.CREATE}`,
      editLinkUrl: `${link.viewUrl}/${ROUTES.EDIT}/:id`
    })),
    title: 'Update Data'
  },

  {
    pages: [{
      sectionName: 'Food without recipes',
      viewPageComponent: ReportFoodWithNoRecipesPage,
      viewUrl: ROUTES.REPORTS_FOOD_MISSING_RECIPES
    }],
    title: 'Reports'
  }
];
