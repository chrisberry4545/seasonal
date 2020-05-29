import React from 'react';
import { CreateCountryPage } from './CreateCountryPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateCountryForm: () => 'CreateCountryForm'
}));

describe('<CreateCountryPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateCountryPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
