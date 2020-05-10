import React from 'react';
import { BadgePage } from './BadgePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: () => 'ScrollView'
}));

jest.mock('../../components-main', () => ({
  BadgesDetailsLoaderConnecter: () => 'BadgesDetailsLoaderConnecter',
  BadgesTopSectionConnecter: () => 'BadgesTopSectionConnecter',
  FoodForBadgeConnecter: () => 'FoodForBadgeConnecter',
  HeaderConnecter: () => 'HeaderConnecter'
}));

jest.mock('../../components-layout', () => ({
  DetailsPageLayout: () => 'DetailsPageLayout',
  MainContainer: () => 'MainContainer'
}));

describe('<BadgePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <BadgePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
