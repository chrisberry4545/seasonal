import React from 'react';
import * as react from 'react';
import { BaseFormTranslationsRegionName } from './BaseFormTranslationsRegionName';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsRegionName, IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllRegions: jest.fn()
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

describe('<BaseFormTranslationsRegionName />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ITranslationsRegionName;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllRegions')
      .mockResolvedValue([{ id: 'c1', name: 'name' }] as IDbRegion[]);
    wrapper = shallow(
      <BaseFormTranslationsRegionName
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
