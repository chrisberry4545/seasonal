import React, { FC, Fragment, useState, KeyboardEventHandler } from 'react';
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

  const handleKeyPress: KeyboardEventHandler = (
    event
  ) => {
    if (event.keyCode === 13) {
      const inputValue = inputs.value || [];
      const visibleOptions = filteredOptions.map((option) => option.value);
      const areAllOptionsSelected = visibleOptions
        .every((option) => inputValue.includes(option));
      if (areAllOptionsSelected) {
        const withOptionsRemoved = inputValue
          .filter((value) => !visibleOptions.includes(value));
        inputs.onChange(withOptionsRemoved);
      } else {
        const optionsToAdd = visibleOptions
          .filter((value) => !inputValue.includes(value));
        inputs.onChange([
          ...inputValue,
          ...optionsToAdd
        ]);
      }
    }
  };

  return <Fragment>
    <Input
      className='c-searchable-multiselect__search'
      placeholder='Search'
      onKeyDown={handleKeyPress}
      onChange={searchUpdated} />
    <Multiselect {...{
      ...inputs,
      className: (inputs.className || '')
        + ' c-searchable-multiselect__multi-select',
      options: filteredOptions
    }} />
  </Fragment>;
};
