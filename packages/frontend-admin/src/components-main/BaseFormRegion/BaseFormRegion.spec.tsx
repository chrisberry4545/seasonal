import React from 'react';
import * as react from 'react';
import { BaseFormRegion } from './BaseFormRegion';
import { shallow, ShallowWrapper } from 'enzyme';
import { IDbRegion, ICountry } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllCountries: jest.fn()
}));
jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormRegion />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as IDbRegion;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllCountries')
      .mockResolvedValue([{ id: 'c1', name: 'country1' }] as ICountry[]);
    wrapper = shallow(
      <BaseFormRegion
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
