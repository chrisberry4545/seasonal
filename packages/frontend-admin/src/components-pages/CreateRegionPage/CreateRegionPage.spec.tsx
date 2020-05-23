import React from 'react';
import { CreateRegionPage } from './CreateRegionPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateRegionForm: () => 'CreateRegionForm'
}));

describe('<CreateRegionPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateRegionPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
