import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SummaryColumn } from '../SummaryColumn/SummaryColumn';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium'
}));

describe('<SummaryColumn />', () => {
  let wrapper: ShallowWrapper;

  describe('when there is an image url', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SummaryColumn
          title='Title'
          text='Some column text'
          imageUrl='https://image.com' />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  });

  describe('when there is no image url', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SummaryColumn
          title='Title'
          text='Some column text' />
      )
    );

    test('do not display an image', () =>
      expect(wrapper.find('img').exists()).toBe(false));

  });

});
