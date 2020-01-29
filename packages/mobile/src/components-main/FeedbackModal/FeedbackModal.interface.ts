export interface IFeedbackModalInputProps {
  isVisible: boolean;
}

export interface IFeedbackModalDispatchProps {
  closeFeedbackModal: () => void;
}

export interface IFeedbackModalProps
  extends IFeedbackModalInputProps, IFeedbackModalDispatchProps {}
