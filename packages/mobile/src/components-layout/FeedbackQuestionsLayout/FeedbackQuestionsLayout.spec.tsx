import React from 'react';
import { FeedbackQuestionsLayout } from './FeedbackQuestionsLayout';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';
import { BorderedButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BorderedButton: () => 'BorderedButton',
  TextHeadingMedium: () => 'TextHeadingMedium',
  TextMedium: () => 'TextMedium'
}));
jest.mock('../ConfirmButtonLayout/ConfirmButtonLayout', () => ({
  ConfirmButtonLayout: () => 'ConfirmButtonLayout'
}));

describe('<FeedbackQuestionsLayout />', () => {
  let wrapper: ShallowWrapper;
  let mockOnConfirmClicked: jest.Mock;
  let mockOnRejectClicked: jest.Mock;

  beforeEach(() => {
    mockOnConfirmClicked = jest.fn();
    mockOnRejectClicked = jest.fn();
    wrapper = shallow(
      <FeedbackQuestionsLayout
        questionTitle='Title'
        onConfirmButtonClicked={mockOnConfirmClicked}
        onRejectButtonClicked={mockOnRejectClicked}
        confirmButtonText='Confirm'
        rejectButtonText='Reject'
      >
        <View>Children</View>
      </FeedbackQuestionsLayout>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when reject is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BorderedButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('calls onRejectButtonClicked', () =>
      expect(mockOnRejectClicked).toHaveBeenCalled());
  });

  describe('when confirm is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BorderedButton).last().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('calls onConfirmClicked', () =>
      expect(mockOnConfirmClicked).toHaveBeenCalled());
  });

  describe('when there are no children', () => {
    beforeEach(() => {
      wrapper = shallow(
        <FeedbackQuestionsLayout
          questionTitle='Title'
          onConfirmButtonClicked={() => undefined}
          onRejectButtonClicked={() => undefined}
          confirmButtonText='Confirm'
          rejectButtonText='Reject' />
      );
    });

    test('does not render any children', () => expect(wrapper).toMatchSnapshot());
  });
});
