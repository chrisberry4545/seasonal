import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BadgePage } from './BadgePage';

jest.mock('../../components-main', () => ({
  BadgesTopSectionConnecter: () => 'BadgesTopSectionConnecter',
  FoodForBadgeConnecter: () => 'FoodForBadgeConnecter',
  PageWithMenu: () => 'PageWithMenu'
}));
jest.mock('../../components-layout', () => ({
  DetailsPageLayout: () => 'DetailsPageLayout'
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
