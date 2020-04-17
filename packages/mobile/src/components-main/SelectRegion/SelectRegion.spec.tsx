import React from 'react';
import { SelectRegion } from './SelectRegion';
import { shallow, ShallowWrapper } from 'enzyme';
import { GroupedSelectBox } from '../../components-elements';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';

jest.mock('../../components-elements', () => ({
  GroupedSelectBox: () => 'GroupedSelectBox',
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<SelectRegion />', () => {
  let wrapper: ShallowWrapper;
  const countrySelectGroups = [{}, {}] as IGroupedSelectOptions[];
  let mockOnRegionSelected: jest.Mock;

  beforeEach(() => {
    mockOnRegionSelected = jest.fn();
    wrapper = shallow(
      <SelectRegion
        countrySelectGroups={countrySelectGroups}
        onRegionSelected={mockOnRegionSelected}>
          Children
      </SelectRegion>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can select a region', () => {
    const onSelected = wrapper.find(GroupedSelectBox).first().props().onSelected;
    if (onSelected) {
      onSelected('id');
    }
    expect(mockOnRegionSelected).toHaveBeenCalledWith('id');
  });

});
