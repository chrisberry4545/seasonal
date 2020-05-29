import React from 'react';
import { CreateBadgePage } from './CreateBadgePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateBadgeForm: () => 'CreateBadgeForm'
}));

describe('<CreateBadgePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateBadgePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
