import React from 'react';
import { BaseFormBadge } from './BaseFormBadge';
import { shallow, ShallowWrapper } from 'enzyme';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';

jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormBadge />', () => {
  let wrapper: ShallowWrapper;
  const item = {} as IBadge;
  let mockUpdateMethod: jest.Mock;

  beforeEach(() => {
    mockUpdateMethod = jest.fn();
    wrapper = shallow(
      <BaseFormBadge
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
