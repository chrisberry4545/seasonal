import React from 'react';
import { FeedbackModal } from './FeedbackModal';
import { shallow, ShallowWrapper } from 'enzyme';
import { ModalLayout } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  ModalLayout: () => 'ModalLayout'
}));
jest.mock('../FeedbackQuestions/FeedbackQuestions.connector', () => ({
  FeedbackQuestionsConnector: () => 'FeedbackQuestionsConnector'
}));

describe('<FeedbackModal />', () => {
  let wrapper: ShallowWrapper;
  let mockCloseFeedbackModal: jest.Mock;

  beforeEach(() => {
    mockCloseFeedbackModal = jest.fn();
    wrapper = shallow(
      <FeedbackModal
        closeFeedbackModal={mockCloseFeedbackModal}
        isVisible={true} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the modal', () => {
    const onClose = wrapper.find(ModalLayout)
      .first().props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockCloseFeedbackModal).toHaveBeenCalled();
  });
});
