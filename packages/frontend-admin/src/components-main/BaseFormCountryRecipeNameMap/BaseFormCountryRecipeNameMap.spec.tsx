import React from 'react';
import * as react from 'react';
import { BaseFormCountryRecipeNameMap } from './BaseFormCountryRecipeNameMap';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryRecipeNameMap, ICountry, IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllCountries: jest.fn(),
  getAllRecipes: jest.fn()
}));

jest.mock('@chrisb-dev/seasonal-shared-models', () => ({
  LANGUAGES: {
    EN_GB: 'en_GB',
    EN_US: 'en-US'
  }
}));

jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormCountryRecipeNameMap />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ICountryRecipeNameMap;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllCountries')
      .mockResolvedValue([{ id: 'c1', name: 'country1' }] as ICountry[]);
    jest.spyOn(services, 'getAllRecipes')
      .mockResolvedValue([{ id: 'r1', name: 'recipe1' }] as IRecipe[]);
    wrapper = shallow(
      <BaseFormCountryRecipeNameMap
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
