import React from 'react';
import { BaseFormUser } from './BaseFormUser';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';

jest.mock('@chrisb-dev/seasonal-shared-models', () => ({
  USER_ROLES: {
    admin: 'admin',
    standard: 'standard'
  }
}));
jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormUser />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as IUser;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    mockUpdateMethod = jest.fn();
    wrapper = shallow(
      <BaseFormUser
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
