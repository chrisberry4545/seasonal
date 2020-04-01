export interface IErrorDisplayInputProps {
  isVisible: boolean;
}

export interface IErrorDisplayDispatchProps {
  hideErrorDisplay: () => void;
}

export interface IErrorDisplayProps
  extends IErrorDisplayInputProps, IErrorDisplayDispatchProps {}
