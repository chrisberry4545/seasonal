import React from 'react';
import { AppContainer } from './AppContainer';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../components-pages', () => ({
  AboutUsPage: () => 'AboutUsPage',
  AllSeasonsPage: () => 'AllSeasonsPage',
  FoodDetailsPage: () => 'FoodDetailsPage',
  SeasonDetailsPage: () => 'SeasonDetailsPage',
  SettingsPage: () => 'SettingsPage'
}));
jest.mock('../components-main', () => ({
  SideMenuConnecter: () => 'SideMenuConnecter'
}));

describe('<AppContainer />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AppContainer />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
