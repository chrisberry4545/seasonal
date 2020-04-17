import React from 'react';
import { SeasonsForFood } from './SeasonsForFood';
import { shallow, ShallowWrapper } from 'enzyme';
import { ISelectableItem } from '@chrisb-dev/seasonal-shared-models';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium',
  TextSmall: () => 'TextSmall'
}));

describe('<SeasonsForFood />', () => {
  let wrapper: ShallowWrapper;
  const seasonsSelectedForFood = [{
    name: 'January'
  }, {
    name: 'February'
  }] as ISelectableItem[];
  let mockOnSeasonSelected: jest.Mock;
  beforeEach(() =>
    mockOnSeasonSelected = jest.fn()
  );

  describe('when it is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonsForFood
          isLoading={false}
          seasonsSelectedForFood={seasonsSelectedForFood}
          onSeasonSelected={mockOnSeasonSelected} />
      )
    );

    test('renders correctly', () =>
      expect(wrapper).toMatchSnapshot());

    test('can select a season', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnSeasonSelected).toHaveBeenCalledWith(0);
    });

  });

  describe('when it is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonsForFood
          isLoading={true}
          seasonsSelectedForFood={seasonsSelectedForFood}
          onSeasonSelected={mockOnSeasonSelected} />
      )
    );

    test('renders nothing', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

});
