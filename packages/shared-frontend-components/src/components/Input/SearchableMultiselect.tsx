import React, { FC, Fragment, useState } from 'react';
import { ISelectOption } from './select-option.interface';
import { Multiselect } from './Multiselect';
import { Input } from './Input';
import './SearchableMultiselect.scss';

export const SearchableMultiselect: FC<{
  className?: string,
  onChange: (newValue: Array<(string | number)>) => void,
  options: ISelectOption[],
  value: Array<(string | number)>
}> = (inputs) => {

  const [filteredOptions, setFilteredOptions] =
    useState<ISelectOption[]>(inputs.options);

  const searchUpdated = (searchValue: string) => {
    const filtered = inputs.options
      .filter((option) => option.label
        .toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredOptions(filtered);
  };

  return <Fragment>
    <Input
      className='c-searchable-multiselect__search'
      placeholder='Search' onChange={searchUpdated} />
    <Multiselect {...{
      ...inputs,
      className: (inputs.className || '')
        + ' c-searchable-multiselect__multi-select',
      options: filteredOptions
    }} />
  </Fragment>;
};
