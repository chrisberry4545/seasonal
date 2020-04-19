
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GlobalModals } from './GlobalModals';

jest.mock('../RegionChangedPrompt/RegionChangedPrompt.connector', () => ({
  RegionChangedPromptConnector: () => 'RegionChangedPromptConnector'
}));
jest.mock('../ErrorDisplay/ErrorDisplay.connector', () => ({
  ErrorDisplayConnector: () => 'ErrorDisplayConnector'
}));

describe('<GlobalModals />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <GlobalModals />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
