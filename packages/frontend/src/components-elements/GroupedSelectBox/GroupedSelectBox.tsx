import React, { FC } from 'react';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';
import { BareButton, TextMedium, TextHeadingSmall } from '@chrisb-dev/seasonal-shared-frontend-components';
import './GroupedSelectBox.scss';

export const GroupedSelectBox: FC<{
  groups: IGroupedSelectOptions[] | undefined,
  onSelected?: (selectedValue: string) => void,
  'data-e2e'?: string
}> = ({
  groups,
  onSelected,
  ...rest
}) => (
  <div data-e2e={rest['data-e2e']}>
  {
    groups && groups.map((group) => (
      <div className='c-grouped-select-box__group' key={group.groupName}>
        <TextHeadingSmall className='c-grouped-select-box__group-name'>
          {group.groupName}
        </TextHeadingSmall>
        {
          group.selectOptions.map((option) =>
            <BareButton
              data-e2e={`select-option-${option.name}`}
              className={
                'c-grouped-select-box__option'
                + (option.isSelected
                  ? ' c-grouped-select-box__option--selected'
                  : ''
                )
              }
              key={option.value}
              onClick={() => onSelected && onSelected(option.value)}>
              <TextMedium>{option.name}</TextMedium>
            </BareButton>
          )
        }
      </div>
    ))
  }
  </div>
);
