import React from 'react';
import { GroupedSelectBox } from './GroupedSelectBox';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';
import { shallow, ShallowWrapper } from 'enzyme';
import { SelectBox } from '../SelectBox/SelectBox';

jest.mock('../SelectBox/SelectBox', () => ({
  SelectBox: () => 'SelectBox'
}));
jest.mock('../Text', () => ({
  TextLarge: () => 'TextLarge'
}));

describe('<GroupedSelectBox />', () => {
  let wrapper: ShallowWrapper;
  let mockOnSelected: jest.Mock;

  const groups = [
    {
      groupName: 'g1',
      selectOptions: [{
        isSelected: true,
        name: 'n1',
        value: 'v1'
      }, {
        isSelected: false,
        name: 'n2',
        value: 'v2'
      }]
    }
  ] as IGroupedSelectOptions[];

  beforeEach(() => {
    mockOnSelected = jest.fn();
    wrapper = shallow(<GroupedSelectBox groups={groups} onSelected={mockOnSelected} />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('Responds when an option is clicked', () => {
    const onSelectedProp = wrapper.find(SelectBox).props().onSelected;
    if (onSelectedProp) {
      onSelectedProp('selected value');
    }
    expect(mockOnSelected).toHaveBeenCalledWith('selected value');
  });
});
