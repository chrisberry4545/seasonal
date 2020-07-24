import { ISelectOption, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export interface ISelectLanguageInputProps {
  languages: ISelectOption[] | undefined;
}

export interface ISelectLanguageDispatchProps {
  onLanguageSelected: (language: LANGUAGES) => void;
}

export interface ISelectLanguageProps
  extends ISelectLanguageInputProps, ISelectLanguageDispatchProps {}
