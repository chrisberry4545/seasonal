import React from 'react';
import { DietaryFilters } from './DietaryFilters';
import { shallow, ShallowWrapper } from 'enzyme';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { RadioButtonGroup } from '../../components-elements';

jest.mock('../../components-elements', () => ({
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
        update={mockUpdate}/>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('clicking a radio button updates the value', () => {
    const onChange = wrapper.find(RadioButtonGroup).first().props().onChange;
    onChange('value');
    expect(mockUpdate).toHaveBeenCalledWith('value');
  });
});
