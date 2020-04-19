import React from 'react';
import { App } from './App';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('connected-react-router', () => ({
  ConnectedRouter: () => 'ConnectedRouter'
}));
jest.mock('../components-main', () => ({
  GlobalModals: () => 'GlobalModals'
}));
jest.mock('../components-pages', () => ({
  AllSeasonsPage: () => 'AllSeasonsPage',
  FoodDetailsPage: () => 'FoodDetailsPage',
  FoodTablePage: () => 'FoodTablePage',
  IntroPage: () => 'IntroPage',
  SettingsPage: () => 'SettingsPage'
}));
jest.mock('../store/reducers', () => ({
  store: {
    dispatch: () => null,
    getState: () => null,
    subscribe: () => null
  },
  storeHistory: {}
}));

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <App />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
