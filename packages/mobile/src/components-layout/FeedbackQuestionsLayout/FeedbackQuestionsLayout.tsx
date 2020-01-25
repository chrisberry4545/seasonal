import React, { FC, Fragment, Children } from 'react';
import { IFeedbackQuestionsLayout } from './FeedbackQuestionsLayout.interface';
import { TextHeadingMedium, TextMedium, BorderedButton } from '../../components-elements';
import { ConfirmButtonLayout } from '../ConfirmButtonLayout/ConfirmButtonLayout';
import { TextStyle, ViewStyle, View } from 'react-native';

const styleFeedbackQuestionsLayoutHeading: TextStyle = {
  lineHeight: 24,
  textAlign: 'center'
};

const styleFeedbackQuestionsLayoutChildren: ViewStyle = {
  marginTop: 14
};

const styleFeedbackQuestionsLayoutButtons: ViewStyle = {
  marginTop: 24
};

const styleFeedbackQuestionsLayoutButton: ViewStyle = {
  flex: 1
};

const buttonMargin = 6;
const styleFeedbackQuestionsLayoutButtonLeft: ViewStyle = {
  marginRight: buttonMargin
};

const styleFeedbackQuestionsLayoutButtonRight: ViewStyle = {
  marginLeft: buttonMargin
};

const styleFeedbackQuestionsLayoutButtonText: TextStyle = {
  textAlign: 'center'
};

export const FeedbackQuestionsLayout: FC<IFeedbackQuestionsLayout> = ({
  questionTitle,
  onConfirmButtonClicked,
  onRejectButtonClicked,
  confirmButtonText,
  rejectButtonText,
  children
}) => (
  <Fragment>
    <TextHeadingMedium style={styleFeedbackQuestionsLayoutHeading}>
      {questionTitle}
    </TextHeadingMedium>
    {
      Children.count(children) > 0
        ? <View style={styleFeedbackQuestionsLayoutChildren}>{ children }</View>
        : null
    }
    <ConfirmButtonLayout style={styleFeedbackQuestionsLayoutButtons}>
      <BorderedButton style={{
        ...styleFeedbackQuestionsLayoutButton,
        ...styleFeedbackQuestionsLayoutButtonLeft
      }}
        onClick={onRejectButtonClicked}>
        <TextMedium style={styleFeedbackQuestionsLayoutButtonText}>
          {rejectButtonText}
        </TextMedium>
      </BorderedButton>
      <BorderedButton style={{
        ...styleFeedbackQuestionsLayoutButton,
        ...styleFeedbackQuestionsLayoutButtonRight
      }}
        onClick={onConfirmButtonClicked}>
        <TextMedium style={styleFeedbackQuestionsLayoutButtonText}>
          {confirmButtonText}
        </TextMedium>
      </BorderedButton>
    </ConfirmButtonLayout>
  </Fragment>
);
