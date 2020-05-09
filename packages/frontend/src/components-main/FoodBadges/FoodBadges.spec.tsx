
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodBadges } from './FoodBadges';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  TextHeadingSmall: () => 'TextHeadingSmall'
}));

describe('<FoodBadges />', () => {
  let wrapper: ShallowWrapper;
  let mockOnBadgeClicked: jest.Mock;
  const badges = [{
    id: '1',
    name: 'Iron'
  }, {
    id: '2',
    name: 'Vitamin A'
  }] as IBadge[];

  beforeEach(() => mockOnBadgeClicked = jest.fn());

  describe('when there are food badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={badges}
          onBadgeClicked={mockOnBadgeClicked} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click badges', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnBadgeClicked).toHaveBeenCalledWith(badges[0].id);
    });
  });

  describe('when there are no badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={undefined}
          onBadgeClicked={mockOnBadgeClicked} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

  describe('when the badges have length 0', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={[]}
          onBadgeClicked={mockOnBadgeClicked} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
