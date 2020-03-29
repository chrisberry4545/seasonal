import React, { FC } from 'react';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared-models';
import { BareButton, TextMedium, TextHeadingSmall } from '@chrisb-dev/seasonal-shared-frontend-components';
import './GroupedSelectBox.scss';

export const GroupedSelectBox: FC<{
  groups: IGroupedSelectOptions[] | undefined,
  onSelected?: (selectedValue: string) => void,
  e2eTag?: string
}> = ({
  groups,
  onSelected,
  e2eTag
}) => (
  <div data-e2e={e2eTag}>
  {
    groups && groups.map((group) => (
      <div className='c-grouped-select-box__group' key={group.groupName}>
        <TextHeadingSmall className='c-grouped-select-box__group-name'>
          {group.groupName}
        </TextHeadingSmall>
        {
          group.selectOptions.map((option) =>
            <BareButton
              e2eTag={`select-option-${option.name}`}
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
