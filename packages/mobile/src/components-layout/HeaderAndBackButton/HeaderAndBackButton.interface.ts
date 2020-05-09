export interface IHeaderAndBackButtonInputProps {
  title: string | undefined;
}

export interface IHeaderAndBackButtonDispatchProps {
  onGoBack: () => void;
}

export interface IHeaderAndBackButtonProps
  extends IHeaderAndBackButtonDispatchProps,
  IHeaderAndBackButtonInputProps {}
