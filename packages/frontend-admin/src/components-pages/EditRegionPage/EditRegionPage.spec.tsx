import React from 'react';
import { EditRegionPage } from './EditRegionPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditRegionForm: () => 'EditRegionForm'
}));

describe('<EditRegionPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditRegionPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
