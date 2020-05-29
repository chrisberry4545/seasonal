import React from 'react';
import { EditBadgePage } from './EditBadgePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditBadgeForm: () => 'EditBadgeForm'
}));

describe('<EditBadgePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditBadgePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
