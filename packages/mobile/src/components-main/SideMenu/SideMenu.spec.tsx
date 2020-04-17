import React from 'react';
import { SideMenu } from './SideMenu';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton, TextMedium, LoadingSpinner } from '../../components-elements';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { ISideMenuProps } from './SideMenu.interface';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  LoadingSpinner: () => 'LoadingSpinner',
  TextMedium: () => 'TextMedium'
}));
jest.mock('react-native-gesture-handler', () => ({
  ScrollView: () => 'ScrollView'
}));

describe('<SideMenu />', () => {
  let wrapper: ShallowWrapper;
  let mockOnAllSeasonsSelected: jest.Mock;
  let mockOnSeasonSelected: jest.Mock;
  let mockGoToAboutUsPage: jest.Mock;
  let mockGoToSettingsPage: jest.Mock;
  let mockOnMenuFeedbackSelected: jest.Mock;

  const initProps = (): ISideMenuProps => ({
    allBasicSeasonData: [{
      name: 'January',
      seasonIndex: 0
    }, {
      name: 'February',
      seasonIndex: 1
    }] as IHydratedSeason[],
    currentSeasonIndex: 1,
    isCurrentRouteAboutUs: false,
    isCurrentRouteAllSeasons: false,
    isCurrentRouteSeasonDetails: false,
    isCurrentRouteSettings: false,
    isLoading: false,
    onAllSeasonsSelected: mockOnAllSeasonsSelected,
    onGoToAboutUsPage: mockGoToAboutUsPage,
    onGoToSettingsPage: mockGoToSettingsPage,
    onMenuFeedbackSelected: mockOnMenuFeedbackSelected,
    onSeasonSelected: mockOnSeasonSelected
  });

  const clickButtonWithText = (buttonText: string) => {
    const onClick = wrapper.findWhere(
      (node) =>
        node.type() === BareButton
        && node.find(TextMedium).children().text() === buttonText
    ).first().props().onClick;
    if (onClick) {
      onClick();
    }
  };

  beforeEach(() => {
    mockOnAllSeasonsSelected = jest.fn();
    mockOnSeasonSelected = jest.fn();
    mockGoToAboutUsPage = jest.fn();
    mockGoToSettingsPage = jest.fn();
    mockOnMenuFeedbackSelected = jest.fn();
    wrapper = shallow(
      <SideMenu {...initProps()} />
    );
  });

  describe('when the menu has loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SideMenu {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can open the change settings page', () => {
      clickButtonWithText('Change region');
      expect(mockGoToSettingsPage).toHaveBeenCalled();
    });

    test('can open the all seasons page', () => {
      clickButtonWithText('All seasons');
      expect(mockOnAllSeasonsSelected).toHaveBeenCalled();
    });

    test('can change the season in view', () => {
      clickButtonWithText('January');
      expect(mockOnSeasonSelected).toHaveBeenCalledWith(0);
    });

    test('can go to the about us page', () => {
      clickButtonWithText('About us');
      expect(mockGoToAboutUsPage).toHaveBeenCalled();
    });

    test('can go to the give feedback page', () => {
      clickButtonWithText('Give feedback');
      expect(mockOnMenuFeedbackSelected).toHaveBeenCalled();
    });

  });

  describe('when the menu is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SideMenu {...({
          ...initProps(),
          isLoading: true
        })} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));
  });

});
