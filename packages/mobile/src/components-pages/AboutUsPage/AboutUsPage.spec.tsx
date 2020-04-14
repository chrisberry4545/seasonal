import React from 'react';
import { AboutUsPage } from './AboutUsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  AboutUs: () => 'AboutUs',
  HeaderConnecter: () => 'HeaderConnecter',
  PrivacyPolicyLink: () => 'PrivacyPolicyLink'
}));

jest.mock('../../components-layout', () => ({
  DefaultPaddingContainer: () => 'DefaultPaddingContainer',
  MainContainer: () => 'MainContainer'
}));

describe('<AboutUsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AboutUsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
