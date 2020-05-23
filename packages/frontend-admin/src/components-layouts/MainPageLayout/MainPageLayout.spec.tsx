import React from 'react';
import { MainPageLayout } from '../MainPageLayout/MainPageLayout';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<MainPageLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <MainPageLayout>
        Children
      </MainPageLayout>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
