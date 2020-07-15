import React from 'react';
import { ViewTranslationsSeasonNamesPage } from './ViewTranslationsSeasonNamesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListTranslationsSeasonNames: () => 'FullListTranslationsSeasonNames'
}));

describe('<ViewTranslationsSeasonNamesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewTranslationsSeasonNamesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
