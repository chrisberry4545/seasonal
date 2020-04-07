import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BackgroundImageWithLoadingSpinner } from './BackgroundImageWithLoadingSpinner';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<BackgroundImageWithLoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BackgroundImageWithLoadingSpinner src='https://image.com'>
        Contents
      </BackgroundImageWithLoadingSpinner>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
