
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SeasonMenu } from './SeasonMenu';
import { ISeasonMenuProps } from './SeasonMenu.interface';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { LoadingSpinner, CrossIcon, BareButton, TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';
import { PoseGroup } from 'react-pose';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon',
  LoadingSpinner: () => 'LoadingSpinner',
  TextMedium: () => 'TextMedium'
}));
jest.mock('../../helpers', () => ({
  fadeInOutAnimation: () => () => 'OverlayFadeInOutAnimation'
}));
jest.mock('react-pose', () => ({
  PoseGroup: () => 'PoseGroup'
}));

const selectedRouteClass = 'c-season-menu__button--selected';

describe('<SeasonMenu />', () => {
  let wrapper: ShallowWrapper;
  let mockOnSeasonsSelected: jest.Mock;
  let mockOnClose: jest.Mock;
  let mockOnAllSeasonsSelected: jest.Mock;
  let mockOnSettingsSelected: jest.Mock;

  const initProps = (): ISeasonMenuProps => ({
    allBasicSeasonData: [{
      name: 'January'
    }, {
      name: 'February'
    }] as IHydratedSeason[],
    currentSeasonIndex: 1,
    isCurrentRouteAllSeasons: false,
    isCurrentRouteSettings: false,
    isLoading: false,
    isMenuOpen: false,
    onAllSeasonsSelected: mockOnAllSeasonsSelected,
    onClose: mockOnClose,
    onSeasonSelected: mockOnSeasonsSelected,
    onSettingsSelected: mockOnSettingsSelected
  });

  const getButtonWithText = (text: string) =>
    wrapper.findWhere((el) =>
      el.type() === BareButton
      && el.find(TextMedium).exists()
      && el.find(TextMedium).children().text() === text
    );

  beforeEach(() => {
    mockOnAllSeasonsSelected = jest.fn();
    mockOnClose = jest.fn();
    mockOnSeasonsSelected = jest.fn();
    mockOnSettingsSelected = jest.fn();
  });

  describe('when the seasons have loaded', () => {
    const clickButtonWithText = (text: string) => {
      const onClick = getButtonWithText(text).props().onClick;
      if (onClick) {
        onClick();
      }
    };

    beforeEach(() =>
      wrapper = shallow(
         <SeasonMenu {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can close the menu', () => {
      const closeButton = wrapper.findWhere((el) =>
        el.type() === BareButton
        && el.children().first().type() === CrossIcon
      );
      const onClick = closeButton.props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnClose).toHaveBeenCalled();
    });

    test('can click the seasons', () => {
      clickButtonWithText('January');
      expect(mockOnSeasonsSelected).toHaveBeenCalledWith(0);
    });

    test('can click other seasons', () => {
      clickButtonWithText('February');
      expect(mockOnSeasonsSelected).toHaveBeenCalledWith(1);
    });

    test('can click all seasons', () => {
      clickButtonWithText('All seasons');
      expect(mockOnAllSeasonsSelected).toHaveBeenCalled();
    });

    test('can click settings', () => {
      clickButtonWithText('Settings');
      expect(mockOnSettingsSelected).toHaveBeenCalled();
    });

  });

  describe('when the seasons have not loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonMenu {...({
           ...initProps(),
           isLoading: true
          })} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('when the menu is open', () => {
    const getOverlay = () =>
      wrapper.find(PoseGroup).first().children();

    beforeEach(() =>
      wrapper = shallow(
         <SeasonMenu {...({
           ...initProps(),
           isMenuOpen: true
          })} />
      )
    );

    test('shows the overlay', () =>
      expect(getOverlay().exists()).toBe(true));

    test('clicking the overlay closes the menu', () => {
      const onClick = getOverlay().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnClose).toHaveBeenCalled();
    });

  });

  describe('when the route is on all seasons', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonMenu {...({
           ...initProps(),
           isCurrentRouteAllSeasons: true
          })} />
      )
    );

    test('all seasons has the selected class', () =>
      expect(
        getButtonWithText('All seasons')
          .hasClass(selectedRouteClass)
      ).toBe(true)
    );

  });

  describe('when the route is on settings', () => {
    beforeEach(() =>
      wrapper = shallow(
         <SeasonMenu {...({
           ...initProps(),
           isCurrentRouteSettings: true
          })} />
      )
    );

    test('all seasons has the selected class', () =>
      expect(
        getButtonWithText('Settings')
          .hasClass(selectedRouteClass)
      ).toBe(true)
    );

  });

});
