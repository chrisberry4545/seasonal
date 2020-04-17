import React from 'react';
import { FeedbackDoYouLikeTheAppQuestion } from './FeedbackDoYouLikeTheAppQuestion';
import { shallow, ShallowWrapper } from 'enzyme';
import { FeedbackQuestionsLayout } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  FeedbackQuestionsLayout: () => 'FeedbackQuestionsLayout'
}));

describe('<FeedbackDoYouLikeTheAppQuestion />', () => {
  let wrapper: ShallowWrapper;
  let mockSendFeedbackDoNotLikeApp: jest.Mock;
  let mockSendFeedbackLikeApp: jest.Mock;

  beforeEach(() => {
    mockSendFeedbackDoNotLikeApp = jest.fn();
    mockSendFeedbackLikeApp = jest.fn();
    wrapper = shallow(
      <FeedbackDoYouLikeTheAppQuestion
        sendFeedbackDoNotLikeApp={mockSendFeedbackDoNotLikeApp}
        sendFeedbackLikeApp={mockSendFeedbackLikeApp}/>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('clicking do not like app emits an event', () => {
    const onRejectButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onRejectButtonClicked;
    if (onRejectButtonClicked) {
      onRejectButtonClicked();
    }
    expect(mockSendFeedbackDoNotLikeApp).toHaveBeenCalled();
  });

  test('clicking like app emits an event', () => {
    const onConfirmButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onConfirmButtonClicked;
    if (onConfirmButtonClicked) {
      onConfirmButtonClicked();
    }
    expect(mockSendFeedbackLikeApp).toHaveBeenCalled();
  });
});
