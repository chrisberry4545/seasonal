import React from 'react';
import { FeedbackQuestions } from './FeedbackQuestions';
import { shallow, ShallowWrapper } from 'enzyme';
import { FeedbackDoYouLikeTheAppQuestionConnector } from '../FeedbackDoYouLikeTheAppQuestion/FeedbackDoYouLikeTheAppQuestion.connector';
import { FeedbackRateOnStoreQuestionConnector } from '../FeedbackRateOnStoreQuestion/FeedbackRateOnStoreQuestion.connector';
import { FeedbackImprovementsQuestionConnector } from '../FeedbackImprovementsQuestion/FeedbackImprovementsQuestion.connector';

jest.mock('../FeedbackDoYouLikeTheAppQuestion/FeedbackDoYouLikeTheAppQuestion.connector', () => ({
  FeedbackDoYouLikeTheAppQuestionConnector: () => 'FeedbackDoYouLikeTheAppQuestionConnector'
}));
jest.mock('../FeedbackImprovementsQuestion/FeedbackImprovementsQuestion.connector', () => ({
  FeedbackImprovementsQuestionConnector: () => 'FeedbackImprovementsQuestionConnector'
}));
jest.mock('../FeedbackRateOnStoreQuestion/FeedbackRateOnStoreQuestion.connector', () => ({
  FeedbackRateOnStoreQuestionConnector: () => 'FeedbackRateOnStoreQuestionConnector'
}));

describe('<FeedbackQuestions />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FeedbackQuestions
        isDoYouLikeTheAppQuestionVisible={false}
        isImprovementsQuestionVisible={false}
        isRateOnStoreQuestionVisible={false} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders do you like the app question if in that state', () => {
    wrapper = shallow(
      <FeedbackQuestions
        isDoYouLikeTheAppQuestionVisible={true}
        isImprovementsQuestionVisible={false}
        isRateOnStoreQuestionVisible={false} />
    );
    expect(wrapper.find(FeedbackDoYouLikeTheAppQuestionConnector).exists())
      .toBe(true);
  });

  test('renders improvement question if in that state', () => {
    wrapper = shallow(
      <FeedbackQuestions
        isDoYouLikeTheAppQuestionVisible={false}
        isImprovementsQuestionVisible={true}
        isRateOnStoreQuestionVisible={false} />
    );
    expect(wrapper.find(FeedbackImprovementsQuestionConnector).exists())
      .toBe(true);
  });

  test('renders rate on store question if in that state', () => {
    wrapper = shallow(
      <FeedbackQuestions
        isDoYouLikeTheAppQuestionVisible={false}
        isImprovementsQuestionVisible={false}
        isRateOnStoreQuestionVisible={true} />
    );
    expect(wrapper.find(FeedbackRateOnStoreQuestionConnector).exists())
      .toBe(true);
  });
});
