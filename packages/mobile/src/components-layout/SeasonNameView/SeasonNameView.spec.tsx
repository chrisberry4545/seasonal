import React from 'react';
import { SeasonNameView } from './SeasonNameView';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-elements', () => ({
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<SeasonNameView />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <SeasonNameView name='Season name' />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
