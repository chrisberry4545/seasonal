
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodBadges } from './FoodBadges';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium'
}));

describe('<FoodBadges />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;
  const badges = [{
    id: '1',
    name: 'Iron'
  }, {
    id: '2',
    name: 'Vitamin A'
  }] as IBadge[];

  beforeEach(() => mockOnClick = jest.fn());

  describe('when there are food badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={badges}
          onBadgeClicked={mockOnClick} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click the badges', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnClick).toHaveBeenCalledWith(badges[0].id);
    });

  });

  describe('when there are no badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={undefined}
          onBadgeClicked={mockOnClick} />
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
          onBadgeClicked={mockOnClick} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
