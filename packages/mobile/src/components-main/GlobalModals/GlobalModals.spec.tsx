import React from 'react';
import { GlobalModals } from './GlobalModals';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../SelectLocationModal/SelectLocationModal.connector', () => ({
  SelectLocationModalConnector: () => 'SelectLocationModalConnector'
}));
jest.mock('../RegionChangedPrompt/RegionChangedPrompt.connector', () => ({
  RegionChangedPromptConnector: () => 'RegionChangedPromptConnector'
}));
jest.mock('../FeedbackModal/FeedbackModal.connector', () => ({
  FeedbackModalConnector: () => 'FeedbackModalConnector'
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
