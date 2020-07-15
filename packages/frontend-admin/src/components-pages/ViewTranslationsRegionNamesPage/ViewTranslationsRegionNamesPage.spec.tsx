import React from 'react';
import { ViewTranslationsRegionNamesPage } from './ViewTranslationsRegionNamesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListTranslationsRegionNames: () => 'FullListTranslationsRegionNames'
}));

describe('<ViewTranslationsRegionNamesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewTranslationsRegionNamesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
