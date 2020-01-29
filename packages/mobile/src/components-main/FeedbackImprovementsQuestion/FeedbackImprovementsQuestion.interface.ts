export interface IFeedbackImprovementsQuestionDispatchProps {
  closeFeedbackModal: () => void;
  feedbackImprovementsChanged: (improvements: string) => void;
  sendFeedbackImprovementsStart: () => void;
}
