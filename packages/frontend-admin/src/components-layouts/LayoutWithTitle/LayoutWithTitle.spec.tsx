import React from 'react';
import { LayoutWithTitle } from './LayoutWithTitle';
import { shallow, ShallowWrapper } from 'enzyme';
import { TextHeadingMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<LayoutWithTitle />', () => {
  let wrapper: ShallowWrapper;

  describe('when there is a title set', () => {
    beforeEach(() =>
      wrapper = shallow(
        <LayoutWithTitle title='Title'>
          Children
        </LayoutWithTitle>
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  });

  describe('when there is no title set', () => {
    beforeEach(() =>
      wrapper = shallow(
        <LayoutWithTitle>
          Children
        </LayoutWithTitle>
      )
    );

    test('does not show a title', () =>
      expect(wrapper.find(TextHeadingMedium).exists()).toBe(false));

  });

});
