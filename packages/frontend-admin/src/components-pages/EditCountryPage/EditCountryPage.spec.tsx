import React from 'react';
import { EditCountryPage } from './EditCountryPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditCountryForm: () => 'EditCountryForm'
}));

describe('<EditCountryPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditCountryPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
