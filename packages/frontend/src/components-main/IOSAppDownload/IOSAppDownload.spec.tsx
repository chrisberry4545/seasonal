
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IOSAppDownload } from './IOSAppDownload';

describe('<IOSAppDownload />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <IOSAppDownload />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
