
import React from 'react';
import * as react from 'react';
import { DataForm, IDateFormProps } from './DataForm';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  ISelectOption,
  PrimaryButton,
  LoadingSpinner,
  ValidationMessage,
  Input
} from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  Checkbox: () => 'Checkbox',
  ISelectOption: () => 'ISelectOption',
  IValidation: () => 'IValidation',
  Input: () => 'Input',
  LoadingSpinner: () => 'LoadingSpinner',
  Multiselect: () => 'Multiselect',
  PrimaryButton: () => 'PrimaryButton',
  SearchableMultiselect: () => 'SearchableMultiselect',
  Select: () => 'Select',
  TextMedium: () => 'TextMedium',
  ValidationMessage: () => 'ValidationMessage'
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    UPDATE: 'update'
  }
}));

interface ITestData {
  testText: string;
  testNumber: number;
  testPassword: string;
  testCheckbox: boolean;
  testSelect: string;
  testMultiselect: string;
  testSearchableMultiSelect: string;
}

describe('<DataForm />', () => {
  let wrapper: ShallowWrapper;
  let mockProcessItem: jest.Mock;
  let mockSendResolver: (item: ITestData) => void;
  let mockSendData: jest.Mock;
  let props: IDateFormProps<ITestData>;
  const selectOptions = [{
    label: '1',
    value: '1'
  }, {
    label: '2',
    value: '2'
  }] as ISelectOption[];
  const initialItem = {} as ITestData;
  const processedItem = {} as ITestData;

  beforeEach(() => {
    mockProcessItem = jest.fn().mockImplementation((item) => processedItem);
    mockSendData = jest.fn().mockImplementation(() =>
      new Promise((resolve) => mockSendResolver = resolve)
    );
    props = {
      buttonText: 'buttonText',
      formConfig: {
        testText: {
          name: 'testText',
          type: 'text',
          validation: [(value) => value === '' ? 'Required' : null]
        },

        testNumber: {
          name: 'testNumber',
          type: 'number'
        },

        testPassword: {
          name: 'testPassword',
          type: 'password'
        },

        testCheckbox: {
          name: 'testCheckbox',
          type: 'checkbox'
        },

        testSelect: {
          name: 'testSelect',
          options: selectOptions,
          type: 'select'
        },

        testMultiselect: {
          name: 'testMultiselect',
          options: selectOptions,
          type: 'multiselect'
        },

        testSearchableMultiSelect: {
          name: 'testSearchableMultipleSelect',
          options: selectOptions,
          type: 'searchable-multiselect'
        }
      },
      goBackOnUpdate: true,
      item: initialItem,
      processItem: mockProcessItem,
      sendData: mockSendData
    };
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    wrapper = shallow(
      <DataForm {...props} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when the submit button is pressed', () => {
    beforeEach(() => {
      const onClick = wrapper.find(PrimaryButton).props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

    test('updates the item', () =>
      expect(mockSendData).toHaveBeenCalledWith(initialItem));

    describe('when the update is complete', () => {
      beforeEach(() => mockSendResolver({} as ITestData));

      test('hides the loading spinner', () =>
        expect(wrapper.find(LoadingSpinner).exists()).toBe(false));

    });

  });

  describe('when the submit button causes an error', () => {
    beforeEach(() => {
      mockSendData = jest.fn().mockRejectedValue(new Error('Cannot send data'));
      wrapper.setProps({
        sendData: mockSendData
      });
      const onClick = wrapper.find(PrimaryButton).props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('shows a validation message', () =>
      expect(wrapper.find(ValidationMessage).exists()).toBe(true));

  });

  describe('when a form field fails validation', () => {
    beforeEach(() => {
      wrapper.find(Input).first().props().onChange('');
    });

    test('shows a validation message', () =>
      expect(wrapper.find(ValidationMessage).exists()).toBe(true));

  });

  describe('when a form field does not fail validation', () => {
    beforeEach(() => {
      wrapper.find(Input).first().props().onChange('test');
    });

    test('shows a validation message', () =>
      expect(wrapper.find(ValidationMessage).exists()).toBe(false));

  });

});
