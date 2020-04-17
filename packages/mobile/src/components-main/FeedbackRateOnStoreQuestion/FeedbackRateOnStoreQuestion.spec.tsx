import React from 'react';
import { FeedbackRateOnStoreQuestion } from './FeedbackRateOnStoreQuestion';
import { shallow, ShallowWrapper } from 'enzyme';
import { FeedbackQuestionsLayout } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  FeedbackQuestionsLayout: () => 'FeedbackQuestionsLayout'
}));
jest.mock('../../components-elements', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<FeedbackRateOnStoreQuestion />', () => {
  let wrapper: ShallowWrapper;
  let mockSendFeedbackDoNotWantToRate: jest.Mock;
  let mockSendFeedbackWantToRate: jest.Mock;

  beforeEach(() => {
    mockSendFeedbackDoNotWantToRate = jest.fn();
    mockSendFeedbackWantToRate = jest.fn();
    wrapper = shallow(
      <FeedbackRateOnStoreQuestion
        sendFeedbackDoNotWantToRate={mockSendFeedbackDoNotWantToRate}
        sendFeedbackWantToRate={mockSendFeedbackWantToRate}/>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can press do not want to rate', () => {
    const onRejectButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onRejectButtonClicked;
    if (onRejectButtonClicked) {
      onRejectButtonClicked();
    }
    expect(mockSendFeedbackDoNotWantToRate).toHaveBeenCalled();
  });

  test('can press want to rate', () => {
    const onConfirmButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onConfirmButtonClicked;
    if (onConfirmButtonClicked) {
      onConfirmButtonClicked();
    }
    expect(mockSendFeedbackWantToRate).toHaveBeenCalled();
  });
});
