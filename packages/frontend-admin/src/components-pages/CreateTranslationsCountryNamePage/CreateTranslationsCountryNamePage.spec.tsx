import React from 'react';
import { CreateTranslationsCountryNamePage } from './CreateTranslationsCountryNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateTranslationsCountryNameForm: () => 'CreateTranslationsCountryNameForm'
}));

describe('<CreateTranslationsCountryNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateTranslationsCountryNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
