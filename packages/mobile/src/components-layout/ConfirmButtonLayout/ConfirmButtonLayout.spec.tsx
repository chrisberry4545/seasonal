import React from 'react';
import { ConfirmButtonLayout } from './ConfirmButtonLayout';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<ConfirmButtonLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ConfirmButtonLayout
        style={{ backgroundColor: 'blue' }}>
        Button
      </ConfirmButtonLayout>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
