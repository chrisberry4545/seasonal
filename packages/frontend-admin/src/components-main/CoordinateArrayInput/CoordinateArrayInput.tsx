import React, { FC } from 'react';
import { Input, BareButton, CrossIcon, TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';
import './CoordinateArrayInput.scss';

export const CoordinateArrayInput: FC<{
  onChange: (newValue: Array<[number, number]>) => void,
  value?: Array<[number, number]>
}> = ({
  onChange,
  value
}) =>
  <div>
    {
      value && value.map((val, index) => (
        <div key={index} className='c-coordinate-array-input__row'>
          <Input placeholder='latitude' type='number' value={val[0]}
            onChange={
              (newVal) => onChange(value.map((oldValue, mapIndex) =>
                mapIndex === index
                  ? [
                    parseFloat(newVal),
                    oldValue[1]
                  ]
                  : oldValue
              ))
            } />
          <Input placeholder='longitude' type='number' value={val[1]}
            onChange={
              (newVal) => onChange(value.map((oldValue, mapIndex) =>
                mapIndex === index
                  ? [
                    oldValue[0],
                    parseFloat(newVal)
                  ]
                  : oldValue
              ))
            } />
          <BareButton
            onClick={() => onChange(value.filter((v, i) => index !== i))}
            className='c-coordinate-array-input__delete-btn'>
            <CrossIcon />
          </BareButton>
        </div>
      ))
    }
    <BareButton className='c-coordinate-array-input__add-btn'
      onClick={() => onChange([...(value || []), [0, 0]])}>
      <TextMedium>Add row</TextMedium>
    </BareButton>
  </div>;
