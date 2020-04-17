import React from 'react';
import { CurrentSeasonName } from './CurrentSeasonName';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-layout', () => ({
  SeasonNameView: () => 'SeasonNameView'
}));

describe('<CurrentSeasonName />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CurrentSeasonName currentSeasonName='season' />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
