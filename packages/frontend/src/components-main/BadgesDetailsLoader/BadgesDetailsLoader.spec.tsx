
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BadgesDetailsLoader } from './BadgesDetailsLoader';

jest.mock('../../components-layout', () => ({
  CentralLoadingSpinner: () => 'CentralLoadingSpinner'
}));

describe('<BadgesDetailsLoader />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <BadgesDetailsLoader
        isLoading={true} />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
