import React, { useState } from 'react';
import {
  Checkbox,
  Input,
  ISelectOption,
  Multiselect,
  Select,
  IValidation,
  LoadingSpinner,
  PrimaryButton,
  TextMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';
import './DataForm.scss';
import { FORM_BUTTON_TEXT } from '../../consts';

export interface IFormField {
  name?: string;
  options?: ISelectOption[];
  type: 'text' | 'number' | 'password' | 'checkbox' | 'select' | 'multiselect';
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
}

export function DataForm<T>({
  item,
  sendData,
  formConfig,
  processItem,
  buttonText = FORM_BUTTON_TEXT.UPDATE
}: IDateFormProps<T>) {
  const [itemState, setItemState] = useState<Partial<T>>({
    ...item
  });
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
      }
    } catch (error) {
      setIsLoadingState(false);
      setErrorState(error.message);
    }
  };

  const updateField = (
    name: keyof T,
    value: string | string[] | number | boolean,
    validation: IValidation[] | undefined
  ) => {
    if (validation) {
      const errors = validation.map((validationFunction) =>
        validationFunction(value)
      );
      setValidationState({
        ...validationState,
        name: errors
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
                changedValue: number | string | string[] | boolean
              ) => updateField(prop, changedValue, validation),
              options,
              placeholder,
              type,
              value
            };
            const validationErrors = validationState[prop];
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
                        return <Checkbox {...inputs} />;
                      case 'multiselect':
                        return <Multiselect {...{
                          ...inputs,
                          options: inputs.options!
                        } as any} />;
                      case 'select':
                        return <Select {...{
                          ...inputs,
                          options: inputs.options!
                        }} />;
                    }
                  })()
                }
                <div>
                  { validationErrors && validationErrors[0] }
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
        errorState ? <div>{errorState}</div> : null
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
