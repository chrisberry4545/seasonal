import React, { FC } from 'react';

import './AboutEatSeasonal.scss';

import {
  TextHeadingLarge,
  TextMedium
} from '../../components-elements';

export const AboutEatSeasonal: FC<{}> = ({}) => (
  <div className='c-about-eat-seasonal'>
    <h1 className='c-about-eat-seasonal__heading'>
      <TextHeadingLarge>
        About Eat Seasonal
      </TextHeadingLarge>
    </h1>
    <p className='c-about-eat-seasonal__text'>
      <TextMedium>
        Eat Seasonal started because we wanted a way to easily see what fruit
        and vegetables are in seasons. Walking around a supermarket, trying to
        plan seasonal meals becomes much easier when you can quickly access
        information on everything that's in season through your phone.
      </TextMedium>
    </p>
    <p className='c-about-eat-seasonal__text'>
      <TextMedium>
        The app and website give you quick and simple view of all the food
        currently in seasons. They also provide a recipes section including
        carefully selected recipes which use ingredients which are mostly in
        seasons. New recipes are being added all the time!
      </TextMedium>
    </p>
  </div>
);
