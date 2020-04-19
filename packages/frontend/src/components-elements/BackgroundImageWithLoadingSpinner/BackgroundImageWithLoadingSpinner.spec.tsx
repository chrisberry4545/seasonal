import React from 'react';
import * as react from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BackgroundImageWithLoadingSpinner } from './BackgroundImageWithLoadingSpinner';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('../../helpers', () => ({
  loadImage: () => Promise.resolve({} as HTMLImageElement),
  makePromiseCancelable: (promise: Promise<HTMLImageElement>) => ({
    cancel: () => undefined,
    promise
  })
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<BackgroundImageWithLoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  describe('when loading is complete', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
      wrapper = shallow(
        <BackgroundImageWithLoadingSpinner src='https://image.com'>
          Children
        </BackgroundImageWithLoadingSpinner>
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when loading is not complete', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => undefined);
      wrapper = shallow(
        <BackgroundImageWithLoadingSpinner src='https://image.com'>
          Children
        </BackgroundImageWithLoadingSpinner>
      );
    });

    test('renders a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));
  });

  describe('when skipAnimation is false', () => {
    beforeEach(() => {
      jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => undefined);
      wrapper = shallow(
        <BackgroundImageWithLoadingSpinner
          skipAnimation={true}
          src='https://image.com'>
          Children
        </BackgroundImageWithLoadingSpinner>
      );
    });

    test('renders the image immediately', () => expect(wrapper).toMatchSnapshot());

  });

});
