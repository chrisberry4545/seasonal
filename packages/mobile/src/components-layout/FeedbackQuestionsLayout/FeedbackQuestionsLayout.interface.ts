export interface IFeedbackQuestionsLayout {
  questionTitle: string;
  onConfirmButtonClicked: () => void;
  onRejectButtonClicked: () => void;
  confirmButtonText: string;
  rejectButtonText: string;
}
