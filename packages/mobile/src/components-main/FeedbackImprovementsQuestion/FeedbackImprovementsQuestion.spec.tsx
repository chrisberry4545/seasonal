import React from 'react';
import { FeedbackImprovementsQuestion } from './FeedbackImprovementsQuestion';
import { shallow, ShallowWrapper } from 'enzyme';
import { FeedbackQuestionsLayout } from '../../components-layout';
import { MultilineInput } from '../../components-elements';

jest.mock('../../components-layout', () => ({
  FeedbackQuestionsLayout: () => 'FeedbackQuestionsLayout'
}));
jest.mock('../../components-elements', () => ({
  MultilineInput: () => 'MultilineInput'
}));

describe('<FeedbackImprovementsQuestion />', () => {
  let wrapper: ShallowWrapper;
  let mockCloseFeedbackModal: jest.Mock;
  let mockFeedbackImprovementsChanged: jest.Mock;
  let mockFeedbackImprovmentsStart: jest.Mock;

  beforeEach(() => {
    mockCloseFeedbackModal = jest.fn();
    mockFeedbackImprovementsChanged = jest.fn();
    mockFeedbackImprovmentsStart = jest.fn();
    wrapper = shallow(
      <FeedbackImprovementsQuestion
        closeFeedbackModal={mockCloseFeedbackModal}
        feedbackImprovementsChanged={mockFeedbackImprovementsChanged}
        sendFeedbackImprovementsStart={mockFeedbackImprovmentsStart}/>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the modal', () => {
    const onRejectButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onRejectButtonClicked;
    if (onRejectButtonClicked) {
      onRejectButtonClicked();
    }
    expect(mockCloseFeedbackModal).toHaveBeenCalled();
  });

  test('responds to feedback being changed', () => {
    const onChangeText = wrapper.find(MultilineInput)
      .first().props().onChangeText;
    if (onChangeText) {
      onChangeText('text');
    }
    expect(mockFeedbackImprovementsChanged)
      .toHaveBeenCalledWith('text');
  });

  test('can send the improvements', () => {
    const onConfirmButtonClicked = wrapper.find(FeedbackQuestionsLayout)
      .first().props().onConfirmButtonClicked;
    if (onConfirmButtonClicked) {
      onConfirmButtonClicked();
    }
    expect(mockFeedbackImprovmentsStart).toHaveBeenCalled();
  });
});
