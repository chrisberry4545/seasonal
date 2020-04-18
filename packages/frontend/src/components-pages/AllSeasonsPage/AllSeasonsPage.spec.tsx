import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AllSeasonsPage } from '../AllSeasonsPage/AllSeasonsPage';

jest.mock('../../components-main', () => ({
  AllSeasonsConnector: () => 'AllSeasonsConnector',
  AllSeasonsGraphConnector: () => 'AllSeasonsGraphConnector',
  PageWithMenu: () => 'PageWithMenu'
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
