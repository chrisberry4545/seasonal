import React from 'react';
import { TopLoadingSpinner } from './TopLoadingSpinner';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-elements', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<TopLoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <TopLoadingSpinner />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
