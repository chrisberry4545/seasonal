export interface ISelectLocationModalInputProps {
  isVisible: boolean;
}

export interface ISelectLocationModalDispatchProps {
  closeLocationPopup: () => void;
}

export interface ISelectLocationModalProps
  extends ISelectLocationModalInputProps, ISelectLocationModalDispatchProps {}
