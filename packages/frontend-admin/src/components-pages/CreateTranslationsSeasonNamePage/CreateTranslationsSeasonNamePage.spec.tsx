import React from 'react';
import { CreateTranslationsSeasonNamePage } from './CreateTranslationsSeasonNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateTranslationsSeasonNameForm: () => 'CreateTranslationsSeasonNameForm'
}));

describe('<CreateTranslationsSeasonNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateTranslationsSeasonNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
