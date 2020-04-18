
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SeasonsForFood } from './SeasonsForFood';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { ISeasonForFoodProps } from './SeasonsForFood.interface';
import { ISelectableItem } from '@chrisb-dev/seasonal-shared-models';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium',
  TextSmall: () => 'TextSmall'
}));

describe('<SeasonsForFood />', () => {
  let wrapper: ShallowWrapper;
  const initProps = (): ISeasonForFoodProps => ({
    isLoading: false,
    onSeasonSelected: mockOnSeasonSelected,
    seasonsSelectedForFood: [{
      name: 'January'
    }, {
      name: 'February'
    }] as ISelectableItem[]
  });
  let mockOnSeasonSelected: jest.Mock;

  beforeEach(() =>
    mockOnSeasonSelected = jest.fn()
  );

  describe('when the food is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonsForFood {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click the seasons', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnSeasonSelected).toHaveBeenCalledWith(0);
    });

  });

  describe('when the food is done loading', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonsForFood {...({
            ...initProps(),
            isLoading: true
          })} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

  describe('when there a e no seasons', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonsForFood {...({
            ...initProps(),
            seasonsSelectedForFood: undefined
          })} />
      )
    );

    test('does not render any seasons', () =>
      expect(wrapper.find(BareButton).exists()).toBe(false));
  });
});
