
import React from 'react';
import { EditRecipeForm } from './EditRecipeForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getSingleRecipe: jest.fn(),
  updateRecipe: jest.fn()
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));
jest.mock('../BaseFormRecipe/BaseFormRecipe', () => ({
  BaseFormRecipe: () => 'BaseFormRecipe'
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'id' })
}));

describe('<EditRecipeForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as IRecipe;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getSingleRecipe')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateRecipe')
      .mockResolvedValue({} as IRecipe);
    wrapper = shallow(
      <EditRecipeForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can get the item data', async () => {
    await wrapper.find(GetAuthorizedBackendData).props().requestDataMethod();
    expect(mockGetOne).toHaveBeenCalledWith('id');
  });

  test('can update the item', () => {
    const update = wrapper.find(GetAuthorizedBackendData).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockUpdate).toHaveBeenCalledWith(item);
  });

});
