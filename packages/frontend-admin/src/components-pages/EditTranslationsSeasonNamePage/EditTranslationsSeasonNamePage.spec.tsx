import React from 'react';
import { EditTranslationsSeasonNamePage } from './EditTranslationsSeasonNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditTranslationsSeasonNameForm: () => 'EditTranslationsSeasonNameForm'
}));

describe('<EditTranslationsSeasonNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditTranslationsSeasonNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
