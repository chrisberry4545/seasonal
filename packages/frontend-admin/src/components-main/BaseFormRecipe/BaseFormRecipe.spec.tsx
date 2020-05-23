import React from 'react';
import * as react from 'react';
import { BaseFormRecipe } from './BaseFormRecipe';
import { shallow, ShallowWrapper } from 'enzyme';
import { IRecipe, IFood } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllFood: jest.fn()
}));
jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormRecipe />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as IRecipe;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllFood')
      .mockResolvedValue([{ id: 'f1', name: 'food1' }] as IFood[]);
    wrapper = shallow(
      <BaseFormRecipe
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
