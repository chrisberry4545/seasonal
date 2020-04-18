import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PageWithMenu } from './PageWithMenu';

jest.mock('../../components-layout/PageLayout/PageLayout', () => ({
  PageLayout: () => 'PageLayout'
}));
jest.mock('../Header/Header.connector', () => ({
  HeaderConnecter: () => 'HeaderConnecter'
}));
jest.mock('../SeasonMenu/SeasonMenu.connector', () => ({
  SeasonMenuConnecter: () => 'SeasonMenuConnecter'
}));

describe('<PageWithMenu />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <PageWithMenu>
        Children
      </PageWithMenu>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
