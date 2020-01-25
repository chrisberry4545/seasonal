import React, { FC } from 'react';
import { IFeedbackImprovementsQuestionDispatchProps } from './FeedbackImprovementsQuestion.interface';
import { View } from 'react-native';
import { TextHeadingMedium, Input, BareButton, TextMedium } from '../../components-elements';

export const FeedbackImprovementsQuestion: FC<
  IFeedbackImprovementsQuestionDispatchProps
> = ({
  sendFeedbackImprovements
}) => (
  <View>
    <TextHeadingMedium>
      How would you improve Eat Seasonal if you could?
    </TextHeadingMedium>
    <Input></Input>
    <BareButton onClick={() => sendFeedbackImprovements('test')}>
      <TextMedium>
        Send feedback
      </TextMedium>
    </BareButton>
  </View>
);
