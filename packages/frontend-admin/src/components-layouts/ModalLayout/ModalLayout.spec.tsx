import React from 'react';
import { ModalLayout } from './ModalLayout';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<ModalLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ModalLayout>
        Children
      </ModalLayout>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
