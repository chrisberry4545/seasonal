import React, { useState } from 'react';
import {
  Checkbox,
  Input,
  ISelectOption,
  Multiselect,
  Select
} from '@chrisb-dev/seasonal-shared-frontend-components';
import './DataForm.scss';

export interface IFormField {
  options?: ISelectOption[];
  type: 'text' | 'number' | 'checkbox' | 'select' | 'multiselect';
}
export type IDataFormConfigProps<T> = { [key in keyof T & string]?: IFormField };
export interface IDateFormProps<T> {
  item: T;
  sendData: (data: T) => Promise<T>;
  formConfig: IDataFormConfigProps<T> | null;
}

export function DataForm<T>({
  item,
  sendData,
  formConfig
}: IDateFormProps<T>) {
  const [itemState, setItemState] = useState({
    ...item
  });
  const [errorState, setErrorState] = useState(null);

  const submit = async () => {
    try {
      const updatedItem = await sendData(itemState);
      setItemState(updatedItem);
    } catch (error) {
      setErrorState(error.message);
    }
  };

  const updateField = (
    name: keyof T,
    value: number | string | string[]
  ) => {
    setItemState({
      ...itemState,
      [name]: value
    });
  };

  return (
    <div>
      <div>
        {
          formConfig && Object.entries(formConfig).map(([key, formField]) => {
            const { options, type } = formField as IFormField;
            const prop = key as keyof T;
            const value = itemState[prop] as any;
            const placeholder = key[0].toUpperCase()
              + key.replace( /([A-Z])/g, ' $1').slice(1);
            const inputs = {
              onChange: (
                changedValue: number | string | string[]
              ) => updateField(prop, changedValue),
              options,
              placeholder,
              type,
              value
            };
            return (
              <label key={key} className='c-data-form__field'>
                {placeholder}
                {
                  (() => {
                    switch (type) {
                      case 'number':
                      case 'text':
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
              </label>
            );
          })
        }
      </div>
      <button onClick={submit}>Update</button>
      {
        errorState ? <div>{errorState}</div> : null
      }
    </div>
  );
}
