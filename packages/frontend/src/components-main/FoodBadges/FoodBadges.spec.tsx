
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodBadges } from './FoodBadges';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall'
}));

describe('<FoodBadges />', () => {
  let wrapper: ShallowWrapper;
  const badges = [{
    color: '#000000',
    id: '1',
    name: 'Iron'
  }, {
    color: '#FFFFFF',
    id: '2',
    name: 'Vitamin A'
  }] as IBadge[];

  describe('when there are food badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={badges} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when there are no badges', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={undefined} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

  describe('when the badges have length 0', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodBadges
          badges={[]} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
