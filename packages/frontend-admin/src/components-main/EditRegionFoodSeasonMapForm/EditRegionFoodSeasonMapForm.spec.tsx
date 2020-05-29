
import React from 'react';
import { EditRegionFoodSeasonMapForm } from './EditRegionFoodSeasonMapForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { BaseFormRegionSeasonFoodMap } from '../BaseFormRegionSeasonFoodMap/BaseFormRegionSeasonFoodMap';
import { BaseFormRegionFoodSeasonMap } from '../BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';

jest.mock('../BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap', () => ({
  BaseFormRegionFoodSeasonMap: () => 'BaseFormRegionFoodSeasonMap'
}));
jest.mock('../BaseFormRegionSeasonFoodMap/BaseFormRegionSeasonFoodMap', () => ({
  BaseFormRegionSeasonFoodMap: () => 'BaseFormRegionSeasonFoodMap'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton'
}));

describe('<EditRegionFoodSeasonMapForm />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditRegionFoodSeasonMapForm />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when the button is pressed', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('shows the BaseFormRegionSeasonFoodMap component', () =>
      expect(wrapper.find(BaseFormRegionSeasonFoodMap).exists()).toBe(true));

    test('hides the BaseFormRegionFoodSeasonMap component', () =>
      expect(wrapper.find(BaseFormRegionFoodSeasonMap).exists()).toBe(false));

  });

});
