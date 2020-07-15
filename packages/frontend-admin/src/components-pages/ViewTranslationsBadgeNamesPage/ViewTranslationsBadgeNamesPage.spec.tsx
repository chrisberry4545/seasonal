import React from 'react';
import { ViewTranslationsBadgeNamesPage } from './ViewTranslationsBadgeNamesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListTranslationsBadgeNames: () => 'FullListTranslationsBadgeNames'
}));

describe('<ViewTranslationsBadgeNamesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewTranslationsBadgeNamesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
