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
  EditCountryRecipeNameMapPage,
  EditRegionFoodSeasonMapPage
} from '../components-pages';

export const mainLinks = [
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
}));
