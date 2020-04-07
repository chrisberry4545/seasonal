import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { shallow, ShallowWrapper } from 'enzyme';
import { ActivityIndicator } from 'react-native';

jest.mock('react-native', () => ({
  ActivityIndicator: () => 'ActivityIndicator'
}));

describe('<LoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoadingSpinner
        size='small'
        style={{ backgroundColor: '#000000' }} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when no size is input', () => {

    beforeEach(() => {
      wrapper = shallow(<LoadingSpinner />);
    });

    test('defaults to large', () =>
      expect(wrapper.find(ActivityIndicator).props().size).toBe('large'));
  });
});
