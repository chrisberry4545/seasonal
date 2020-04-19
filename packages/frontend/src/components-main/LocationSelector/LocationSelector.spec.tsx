import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LocationSelector } from './LocationSelector';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';
import { GroupedSelectBox } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  GroupedSelectBox: () => 'GroupedSelectBox'
}));

describe('<LocationSelector />', () => {
  let wrapper: ShallowWrapper;
  const countryAndRegionSelectGroup = [{
    groupName: 'g1',
    selectOptions: [{
      name: 'n1'
    }]
  }] as IGroupedSelectOptions[];
  let mockSetRegion: jest.Mock;

  beforeEach(() => {
    mockSetRegion = jest.fn();
    wrapper = shallow(
      <LocationSelector
        countryAndRegionSelectGroup={countryAndRegionSelectGroup}
        setRegion={mockSetRegion} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can select a region', () => {
    const onSelected = wrapper.find(GroupedSelectBox).first().props().onSelected;
    if (onSelected) {
      onSelected('regionId');
    }
    expect(mockSetRegion).toHaveBeenCalledWith('regionId');
  });

});
