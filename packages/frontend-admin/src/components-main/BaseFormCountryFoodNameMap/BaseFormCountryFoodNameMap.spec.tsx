import React from 'react';
import * as react from 'react';
import { BaseFormCountryFoodNameMap } from './BaseFormCountryFoodNameMap';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryFoodNameMap, IFood, ICountry } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllCountries: jest.fn(),
  getAllFood: jest.fn()
}));

jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormCountryFoodNameMap />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ICountryFoodNameMap;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllCountries')
      .mockResolvedValue([{ id: 'c1', name: 'country1' }] as ICountry[]);
    jest.spyOn(services, 'getAllFood')
      .mockResolvedValue([{ id: 'f1', name: 'food1' }] as IFood[]);
    wrapper = shallow(
      <BaseFormCountryFoodNameMap
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
