import React from 'react';
import { ViewBadgesPage } from './ViewBadgesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListBadges: () => 'FullListBadges'
}));

describe('<ViewBadgesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewBadgesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
