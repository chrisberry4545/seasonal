import React from 'react';
import { MainContainer } from './MainContainer';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<MainContainer />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <MainContainer>
        Child
      </MainContainer>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
