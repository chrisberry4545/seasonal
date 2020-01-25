export interface IFeedbackQuestionsInputProps {
  isDoYouLikeTheAppQuestionVisible: boolean;
  isImprovementsQuestionVisible: boolean;
  isRateOnStoreQuestionVisible: boolean;
}

export interface IFeedbackQuestionsDispatchProps {
  sendFeedbackDoNotLikeApp: () => void;
  sendFeedbackImprovements: (improvements: string) => void;
  sendFeedbackLikeApp: () => void;
  sendFeedbackDoNotWantToRate: () => void;
  sendFeedbackWantToRate: () => void;
}

export interface IFeedbackQuestionsProps
  extends IFeedbackQuestionsInputProps, IFeedbackQuestionsDispatchProps {}
