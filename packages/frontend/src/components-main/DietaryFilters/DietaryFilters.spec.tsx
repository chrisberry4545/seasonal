
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DietaryFilters } from './DietaryFilters';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { RadioButtonGroup } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  RadioButtonGroup: () => 'RadioButtonGroup'
}));

describe('<DietaryFilters />', () => {
  let wrapper: ShallowWrapper;
  let mockUpdate: jest.Mock;

  beforeEach(() => {
    mockUpdate = jest.fn();
    wrapper = shallow(
      <DietaryFilters
        dietType={DIET_TYPE.VEGAN}
        update={mockUpdate} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('when a diet type is selected', () => {
    const onChange = wrapper.find(RadioButtonGroup).props().onChange;
    if (onChange) {
      onChange(DIET_TYPE.VEGETARIAN);
    }
    expect(mockUpdate).toHaveBeenCalledWith(DIET_TYPE.VEGETARIAN);
  });

});
