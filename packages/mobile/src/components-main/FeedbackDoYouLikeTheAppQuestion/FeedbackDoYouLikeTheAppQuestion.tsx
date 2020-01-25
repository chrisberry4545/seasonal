import React, { FC } from 'react';
import { IFeedbackDoYouLikeTheAppQuestionDispatchProps } from './FeedbackDoYouLikeTheAppQuestion.interface';
import { View } from 'react-native';
import { TextHeadingMedium, BareButton, TextMedium } from '../../components-elements';

export const FeedbackDoYouLikeTheAppQuestion: FC<
  IFeedbackDoYouLikeTheAppQuestionDispatchProps
> = ({
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp
}) => (
  <View>
    <TextHeadingMedium>
      Are you enjoying Eat Seasonal?
    </TextHeadingMedium>
    <BareButton onClick={sendFeedbackDoNotLikeApp}>
      <TextMedium>
        No
      </TextMedium>
    </BareButton>
    <BareButton onClick={sendFeedbackLikeApp}>
      <TextMedium>
        Yes
      </TextMedium>
    </BareButton>
  </View>
);
