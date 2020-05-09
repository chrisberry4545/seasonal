import React from 'react';
import { DetailsPageLayout } from './DetailsPageLayout';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: () => 'ScrollView'
}));
jest.mock('../DefaultPaddingContainer/DefaultPaddingContainer', () => ({
  DefaultPaddingContainer: () => 'DefaultPaddingContainer'
}));

describe('<DetailsPageLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <DetailsPageLayout />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
