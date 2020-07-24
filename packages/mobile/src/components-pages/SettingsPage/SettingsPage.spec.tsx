import React from 'react';
import { SettingsPage } from './SettingsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: () => 'ScrollView'
}));

jest.mock('../../components-main', () => ({
  HeaderConnecter: () => 'HeaderConnecter',
  SelectLanguageConnecter: () => 'SelectLanguageConnecter',
  SelectLocationConnecter: () => 'SelectLocationConnecter',
  SettingsBackButtonConnecter: () => 'SettingsBackButtonConnecter'
}));

jest.mock('../../components-layout', () => ({
  DefaultPaddingContainer: () => 'DefaultPaddingContainer',
  MainContainer: () => 'MainContainer'
}));

describe('<SettingsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <SettingsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
