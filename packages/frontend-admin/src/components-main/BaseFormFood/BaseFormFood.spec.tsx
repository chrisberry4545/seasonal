import React from 'react';
import * as react from 'react';
import { BaseFormFood } from './BaseFormFood';
import { shallow, ShallowWrapper } from 'enzyme';
import { IFood, IBadge } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllBadges: jest.fn(),
  getAllFood: jest.fn()
}));
jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormFood />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as IFood;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllBadges')
      .mockResolvedValue([{ id: 'b1', name: 'badge1' }] as IBadge[]);
    jest.spyOn(services, 'getAllFood')
      .mockResolvedValue([{ id: 'f1', name: 'food1' }] as IFood[]);
    wrapper = shallow(
      <BaseFormFood
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
