import React from 'react';
import * as react from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from './GetAuthorizedBackendData';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('GetAuthorizedBackendData', () => {
  let wrapper: ShallowWrapper;
  let mockInnerComponent: jest.Mock;
  let mockRequestDataMethod: jest.Mock;
  let mockUpdateMethod: jest.Mock;
  const additionalConfig = {};
  const items = [{}, {}];

  beforeEach(() => {
    mockInnerComponent = jest.fn();
    mockRequestDataMethod = jest.fn().mockResolvedValue(items);
    mockUpdateMethod = jest.fn();
  });

  describe('before the data has been retrieved', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => undefined);
      wrapper = shallow(
        <GetAuthorizedBackendData
          InnerComponent={mockInnerComponent}
          requestDataMethod={mockRequestDataMethod}
          updateMethod={mockUpdateMethod}
          additionalConfig={additionalConfig}
          />
      );
    });

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('after the data has been retrieved', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
      wrapper = shallow(
        <GetAuthorizedBackendData
          InnerComponent={mockInnerComponent}
          requestDataMethod={mockRequestDataMethod}
          updateMethod={mockUpdateMethod}
          additionalConfig={additionalConfig}
          />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  });

  describe('if retrieving the data fails', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
      mockRequestDataMethod = jest.fn().mockRejectedValue(new Error('error'));
      wrapper = shallow(
        <GetAuthorizedBackendData
          InnerComponent={mockInnerComponent}
          requestDataMethod={mockRequestDataMethod}
          updateMethod={mockUpdateMethod}
          additionalConfig={additionalConfig}
          />
      );
    });

    test('renders an error', () => expect(wrapper).toMatchSnapshot());
  });

});
