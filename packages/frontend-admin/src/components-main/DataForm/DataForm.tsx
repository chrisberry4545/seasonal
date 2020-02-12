import React, { useState, FC } from 'react';
import { ISelectOption, Multiselect } from '../../components-elements';
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

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number',
  placeholder?: string,
  onChange: (newValue: string) => void,
  value: string | number
}> = ({
  className,
  type = 'text',
  placeholder,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')}`}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)} />
);

export const Checkbox: FC<{
  className?: string,
  onChange: (newValue: string) => void,
  value: string | number
}> = ({
  className,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')}`}
    type='checkbox'
    value={value}
    onChange={(event) => onChange(event.target.value)} />
);

export const Select: FC<{
  className?: string,
  onChange: (newValue: string) => void,
  options: ISelectOption[],
  value: string | number
}> = ({
  className,
  onChange,
  options,
  value
}) => (
  <select
    className={`${(className || '')}`}
    value={value}
    onChange={(event) => onChange(event.target.value)}>
      {
        options.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      }
  </select>
);

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

  const updateField = (name: keyof T, value: number | string) => {
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
              onChange: (changedValue: number | string) =>
                updateField(prop, changedValue),
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
                        }} />;
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
