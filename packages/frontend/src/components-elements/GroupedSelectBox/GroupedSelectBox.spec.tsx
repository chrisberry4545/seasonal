import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GroupedSelectBox } from './GroupedSelectBox';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium'
}));

describe('<GroupedSelectBox />', () => {
  let wrapper: ShallowWrapper;
  const groups = [{
    groupName: 'g1',
    selectOptions: [{
      name: 'n1',
      value: 'v1'
    }]
  }, {
    groupName: 'g2',
    selectOptions: [{
      name: 'n2',
      value: 'v2'
    }]
  }] as IGroupedSelectOptions[];
  let mockOnSelected: jest.Mock;

  beforeEach(() => {
    mockOnSelected = jest.fn();
    wrapper = shallow(
      <GroupedSelectBox
        onSelected={mockOnSelected}
        groups={groups} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can select items in the select box', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnSelected).toHaveBeenCalledWith('v1');
  });
});
