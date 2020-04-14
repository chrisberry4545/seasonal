import React from 'react';
import { AllSeasonsPage } from './AllSeasonsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  AllSeasonsConnector: () => 'AllSeasonsConnector',
  HeaderConnecter: () => 'HeaderConnecter'
}));

jest.mock('../../components-layout', () => ({
  MainContainer: () => 'MainContainer'
}));

describe('<AllSeasonsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AllSeasonsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
