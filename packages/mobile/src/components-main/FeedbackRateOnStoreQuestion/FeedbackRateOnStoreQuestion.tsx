import React, { FC } from 'react';
import { IFeedbackRateOnStoreQuestionDispatchProps } from './FeedbackRateOnStoreQuestion.interface';
import { View } from 'react-native';
import { TextHeadingMedium, TextMedium, BareButton } from '../../components-elements';

export const FeedbackRateOnStoreQuestion: FC<
  IFeedbackRateOnStoreQuestionDispatchProps
> = ({
  sendFeedbackDoNotWantToRate,
  sendFeedbackWantToRate
}) => (
  <View>
    <TextHeadingMedium>
      Would you mind giving us a rating on the app store?
    </TextHeadingMedium>
    <TextMedium>
      Help others Eat Seasonal
    </TextMedium>
    <BareButton onClick={sendFeedbackDoNotWantToRate}>
      <TextMedium>
        Not now
      </TextMedium>
    </BareButton>
    <BareButton onClick={sendFeedbackWantToRate}>
      <TextMedium>
        Rate the app
      </TextMedium>
    </BareButton>
  </View>
);
