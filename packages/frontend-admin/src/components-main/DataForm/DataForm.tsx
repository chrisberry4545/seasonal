import React, { useState, useEffect } from 'react';
import {
  Checkbox,
  Input,
  ISelectOption,
  Multiselect,
  SearchableMultiselect,
  Select,
  IValidation,
  LoadingSpinner,
  PrimaryButton,
  TextMedium,
  ValidationMessage
} from '@chrisb-dev/seasonal-shared-frontend-components';
import './DataForm.scss';
import { FORM_BUTTON_TEXT } from '../../consts';
import { CoordinateArrayInput } from '../CoordinateArrayInput/CoordinateArrayInput';

export interface IFormField {
  name?: string;
  options?: ISelectOption[];
  type: 'text' | 'number' | 'password' | 'checkbox' | 'select'
    | 'multiselect'
    | 'searchable-multiselect'
    | 'coordinate-array';
  validation?: IValidation[];
}
export type IDataFormConfigProps<T> = { [key in keyof T & string]?: IFormField };
export interface IDateFormProps<T> {
  item: Partial<T>;
  sendData?: (data: T) => Promise<T | void>;
  formConfig: IDataFormConfigProps<T> | null;
  processItem?: (
    item: Partial<T>,
    previousItem: Partial<T> | null
  ) => Partial<T>;
  buttonText?: string;
  goBackOnUpdate?: boolean;
}

export function DataForm<T>({
  item,
  sendData,
  formConfig,
  processItem,
  buttonText = FORM_BUTTON_TEXT.UPDATE,
  goBackOnUpdate = true
}: IDateFormProps<T>) {
  const [itemState, setItemState] = useState<Partial<T>>(item);

  useEffect(() => {
    // Select first item from select if not set
    if (formConfig && item) {
      const selectFields = Object.entries(formConfig)
        .filter(([, field]) => (field as IFormField).type === 'select');
      const newItem = Object.entries(item).reduce((builtItem, [key, value]) => {
        const matchingField = selectFields
          .find(([fieldKey]) => fieldKey === key);
        const selectOptions = matchingField
          && (matchingField[1] as IFormField).options!.map((option) => option.value);
        return {
          ...builtItem,
          [key]: selectOptions && !selectOptions.includes(value as string | number)
            ? selectOptions[0]
            : value
        };
      }, {} as T);
      setItemState(newItem);
    }
  }, [item, formConfig]);

  const [errorState, setErrorState] = useState<string | null>(null);
  const [validationState, setValidationState] = useState<
    { [key in keyof T]?: string[] }
  >({});
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);

  const updateItem = (
    newItem: Partial<T>
  ) => {
    if (processItem) {
      const processedItem = processItem(newItem, itemState);
      setItemState(processedItem);
    } else {
      setItemState(newItem);
    }
  };

  const submit = async () => {
    try {
      setIsLoadingState(true);
      const updatedItem = await sendData!(itemState as T);
      if (updatedItem) {
        updateItem(updatedItem);
        setIsLoadingState(false);
        if (goBackOnUpdate) {
          window.history.back();
        }
      }
    } catch (error) {
      setIsLoadingState(false);
      setErrorState(error.message);
    }
  };

  const updateField = (
    name: keyof T,
    value: string | string[] | number | boolean | Array<[number, number]>,
    validation: IValidation[] | undefined
  ) => {
    if (validation) {
      const errors = validation.map((validationFunction) =>
        validationFunction(value)
      );
      setValidationState({
        ...validationState,
        [name]: errors
      });
    }
    const newItem = {
      ...itemState,
      [name]: value
    };
    updateItem(newItem);
  };

  return (
    <div className='c-data-form'>
      <div>
        {
          formConfig && Object.entries(formConfig).map(([key, formField]) => {
            const { options, type, validation } = formField as IFormField;
            const prop = key as keyof T;
            const value = itemState[prop] as any;
            const placeholder = key[0].toUpperCase()
              + key.replace( /([A-Z])/g, ' $1').slice(1);
            const inputs = {
              className: 'c-data-form__input',
              onChange: (
                changedValue: number | string | string[] | boolean | Array<[number, number]>
              ) => updateField(prop, changedValue, validation),
              options,
              placeholder,
              type,
              value
            };
            const validationErrors = validationState[prop]
              && validationState[prop]!.filter((error) => error !== null);
            return (
              <label key={key} className='c-data-form__field'>
                <TextMedium className='c-data-form__label'>{placeholder}</TextMedium>
                {
                  (() => {
                    switch (type) {
                      case 'number':
                      case 'text':
                      case 'password':
                        return <Input {...{
                          ...inputs,
                          type: inputs.type as 'text' | 'number' }
                        } />;
                      case 'checkbox':
                        return <Checkbox {...{
                          ...inputs,
                          className: `${inputs.className} c-data-form__input--checkbox`
                        }} />;
                      case 'multiselect':
                        return <Multiselect {...{
                          ...inputs,
                          options: inputs.options!
                        } as any} />;
                      case 'searchable-multiselect':
                        return <SearchableMultiselect {...{
                          ...inputs,
                          options: inputs.options!
                        } as any} />;
                      case 'select':
                        return <Select {...{
                          ...inputs,
                          options: inputs.options!
                        }} />;
                      case 'coordinate-array':
                        return <CoordinateArrayInput {...{
                          ...inputs
                        }} />;
                    }
                  })()
                }
                <div>
                  {
                    validationErrors
                    && validationErrors[0]
                    && <ValidationMessage>{validationErrors[0]}</ValidationMessage>
                  }
                </div>
              </label>
            );
          })
        }
      </div>
      <PrimaryButton className='c-data-form__submit-btn' onClick={submit}>
        {buttonText}
      </PrimaryButton>
      {
        errorState && <ValidationMessage>{errorState}</ValidationMessage>
      }
      {
        isLoadingState
        && <div className='c-data-form__loading-spinner'>
            <LoadingSpinner />
          </div>
      }
    </div>
  );
}
