import React from 'react';
import * as react from 'react';
import { BaseFormTranslationsSeasonName } from './BaseFormTranslationsSeasonName';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsSeasonName, IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '@chrisb-dev/seasonal-shared-frontend-utilities';

jest.mock('@chrisb-dev/seasonal-shared-frontend-utilities', () => ({
  getAllSeasons: jest.fn()
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

describe('<BaseFormTranslationsSeasonName />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ITranslationsSeasonName;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllSeasons')
      .mockResolvedValue([{ id: 'c1', name: 'name' }] as IBaseSeason[]);
    wrapper = shallow(
      <BaseFormTranslationsSeasonName
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
