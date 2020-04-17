import React from 'react';
import { DefaultPaddingContainer } from './DefaultPaddingContainer';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<DefaultPaddingContainer />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <DefaultPaddingContainer>
        Child
      </DefaultPaddingContainer>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
