import React, { FC } from 'react';

import { TextLarge, TextHeadingLarge } from '../../components-elements';
import { ScrollView, ViewStyle, TextStyle } from 'react-native';

const styleAboutUs: ViewStyle = {
  flex: 1,
  marginBottom: 30,
  marginTop: 20
};

const styleAboutUsTitle: TextStyle = {
  marginBottom: 30,
  textAlign: 'center'
};

const styleAboutUsText: TextStyle = {
  marginBottom: 30
};

export const AboutUs: FC<{}> = () => (
  <ScrollView style={ styleAboutUs }>
    <TextHeadingLarge style={ styleAboutUsTitle }>
      About Eat Seasonal
    </TextHeadingLarge>
    <TextLarge style={ styleAboutUsText }>
      Eat Seasonal started because we wanted a way to easily see what fruit
      and vegetables are in seasons. Walking around a supermarket, trying to
      plan seasonal meals becomes much easier when you can quickly access
      information on everything that's in season through your phone.
    </TextLarge>
    <TextLarge style={ styleAboutUsText }>
      The app and website give you quick and simple view of all the food
      currently in seasons. They also provide a recipes section including
      carefully selected recipes which use ingredients which are mostly in
      seasons. New recipes are being added all the time!
    </TextLarge>
  </ScrollView>
);
