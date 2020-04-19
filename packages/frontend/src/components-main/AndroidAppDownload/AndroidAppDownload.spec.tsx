
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AndroidAppDownload } from './AndroidAppDownload';

describe('<AndroidAppDownload />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AndroidAppDownload />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
