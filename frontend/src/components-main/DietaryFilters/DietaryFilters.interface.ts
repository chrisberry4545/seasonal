import { DIET_TYPE } from '@chrisb-dev/seasonal-shared';

export interface IDietaryFiltersInputProps {
  dietType: DIET_TYPE;
}

export interface  IDietaryFiltersDispatchProps {
  update: (dietType: DIET_TYPE) => void;
}

export interface IDietaryFiltersProps
  extends IDietaryFiltersInputProps, IDietaryFiltersDispatchProps {}
