import React from 'react';
import { ViewTranslationsCountryNamesPage } from './ViewTranslationsCountryNamesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListTranslationsCountryNames: () => 'FullListTranslationsCountryNames'
}));

describe('<ViewTranslationsCountryNamesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewTranslationsCountryNamesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
