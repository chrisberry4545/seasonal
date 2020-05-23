import React from 'react';
import { BaseFormCountry } from './BaseFormCountry';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';

jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormCountry />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ICountry;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    mockUpdateMethod = jest.fn();
    wrapper = shallow(
      <BaseFormCountry
        items={item}
        updateMethod={mockUpdateMethod}
        buttonText='Edit'
        />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can call update method', () => {
    const sendData = wrapper.find(DataForm).props().sendData;
    if (sendData) {
      sendData(item);
    }
    expect(mockUpdateMethod).toHaveBeenCalledWith(item);
  });

});
