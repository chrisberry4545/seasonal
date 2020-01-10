import React, { FC, Fragment } from 'react';
import { ISelectOption } from '@chrisb-dev/seasonal-shared';
import { ViewStyle, TextStyle } from 'react-native';
import { BareButton } from '../Buttons';
import { TextMedium } from '../Text';
import { colors } from '../../styles/colors';

const styleSelectOption: ViewStyle = {
  padding: 10
};

const styleSelectOptionSelected: TextStyle = {
  backgroundColor: colors.greyLight
};

export const SelectBox: FC<{
  options: ISelectOption[] | undefined,
  onSelected?: (selectedValue: string) => void
}> = ({
  options,
  onSelected
}) => (
  <Fragment>
  {
    options && options.map((selectOptions) => (
      <BareButton
        style={[
          styleSelectOption,
            ...(selectOptions.isSelected
              ? [styleSelectOptionSelected]
              : []
            )
        ]}
        key={selectOptions.value}
        onClick={() => onSelected && onSelected(selectOptions.value)}>
        <TextMedium>
          {selectOptions.name}
        </TextMedium>
      </BareButton>
    ))
  }
  </Fragment>
);
