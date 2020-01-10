export interface IBottomTabInputProps {
  isCurrentTabFood: boolean;
  isCurrentTabRecipes: boolean;
}

export interface IBottomTabDispatchProps {
  goToFoodTab: () => void;
  goToRecipesTab: () => void;
}

export interface IBottomTabProps
  extends IBottomTabInputProps, IBottomTabDispatchProps {}
