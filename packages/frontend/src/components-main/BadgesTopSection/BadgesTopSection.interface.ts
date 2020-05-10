export interface IBadgesTopSectionInputProps {
  isLoading: boolean;
  badgeName: string | undefined;
}

export interface IBadgesTopSectionDispatchProps {
  onGoBack: () => void;
}

export interface IBadgesTopSectionProps
  extends IBadgesTopSectionDispatchProps,
  IBadgesTopSectionInputProps {}
