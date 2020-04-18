import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SettingsPage } from '../SettingsPage/SettingsPage';

jest.mock('../../components-main', () => ({
  LocationSelectorConnecter: () => 'LocationSelectorConnecter',
  PageWithMenu: () => 'PageWithMenu'
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
