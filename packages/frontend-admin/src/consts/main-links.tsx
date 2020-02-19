import { ROUTES } from '../config';
import {
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
  EditCountryRecipeNameMapPage
} from '../components-pages';

export const mainLinks = [
  {
    createLinkText: 'Create country',
    createPageComponent: CreateCountryPage,
    editPageComponent: EditCountryPage,
    viewLinkText: 'View countries',
    viewPageComponent: ViewCountriesPage,
    viewUrl: ROUTES.COUNTRY
  },
  {
    createLinkText: 'Create country food name map',
    createPageComponent: CreateCountryFoodNameMapPage,
    editPageComponent: EditCountryFoodNameMapPage,
    viewLinkText: 'View country food name map',
    viewPageComponent: ViewCountryFoodNameMapsPage,
    viewUrl: ROUTES.COUNTRY_FOOD_NAME_MAP
  },
  {
    createLinkText: 'Create country recipe name map',
    createPageComponent: CreateCountryRecipeNameMapPage,
    editPageComponent: EditCountryRecipeNameMapPage,
    viewLinkText: 'View country recipe name map',
    viewPageComponent: ViewCountryRecipeNameMapsPage,
    viewUrl: ROUTES.COUNTRY_RECIPE_NAME_MAP
  },
  {
    createLinkText: 'Create food',
    createPageComponent: CreateFoodPage,
    editPageComponent: EditFoodPage,
    viewLinkText: 'View food',
    viewPageComponent: ViewFoodPage,
    viewUrl: ROUTES.FOOD
  },
  {
    createLinkText: 'Create recipe',
    createPageComponent: CreateRecipePage,
    editPageComponent: EditRecipePage,
    viewLinkText: 'View recipes',
    viewPageComponent: ViewRecipesPage,
    viewUrl: ROUTES.RECIPE
  },
  {
    createLinkText: 'Create region',
    createPageComponent: CreateRegionPage,
    editPageComponent: EditRegionPage,
    viewLinkText: 'View regions',
    viewPageComponent: ViewRegionsPage,
    viewUrl: ROUTES.REGION
  },
  {
    createLinkText: 'Create user',
    createPageComponent: CreateUserPage,
    editPageComponent: EditUserPage,
    viewLinkText: 'View users',
    viewPageComponent: ViewUsersPage,
    viewUrl: ROUTES.USER
  }
].map((link) => ({
  ...link,
  createLinkUrl: `${link.viewUrl}/${ROUTES.CREATE}`,
  editLinkUrl: `${link.viewUrl}/${ROUTES.EDIT}/:id`
}));
