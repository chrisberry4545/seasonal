
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ViewAppLinks } from './ViewAppLinks';

jest.mock('../AndroidAppDownload/AndroidAppDownload', () => ({
  AndroidAppDownload: () => 'AndroidAppDownload'
}));
jest.mock('../ViewWebAppVersion/ViewWebAppVersion.connector', () => ({
  ViewWebAppVersionConnector: () => 'ViewWebAppVersionConnector'
}));
jest.mock('../IOSAppDownload/IOSAppDownload', () => ({
  IOSAppDownload: () => 'IOSAppDownload'
}));

describe('<ViewAppLinks />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
       <ViewAppLinks />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
