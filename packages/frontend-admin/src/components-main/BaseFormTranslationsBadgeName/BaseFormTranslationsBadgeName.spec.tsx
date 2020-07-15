import React from 'react';
import * as react from 'react';
import { BaseFormTranslationsBadgeName } from './BaseFormTranslationsBadgeName';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsBadgeName, IBadge } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  getAllBadges: jest.fn()
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

describe('<BaseFormTranslationsBadgeName />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as ITranslationsBadgeName;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    mockUpdateMethod = jest.fn();
    jest.spyOn(services, 'getAllBadges')
      .mockResolvedValue([{ id: 'c1', name: 'name1' }] as IBadge[]);
    wrapper = shallow(
      <BaseFormTranslationsBadgeName
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
