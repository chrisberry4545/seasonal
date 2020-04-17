import React from 'react';
import { NoResultsText } from './NoResultsText';
import { shallow, ShallowWrapper } from 'enzyme';
import { TextMedium } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<NoResultsText />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <NoResultsText text='No results' />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when there is no text', () => {

    beforeEach(() =>
      wrapper = shallow(
        <NoResultsText text={undefined} />
      )
    );

    test('should not render anything', () =>
      expect(wrapper.find(TextMedium).exists()).toBe(false));
  });
});
