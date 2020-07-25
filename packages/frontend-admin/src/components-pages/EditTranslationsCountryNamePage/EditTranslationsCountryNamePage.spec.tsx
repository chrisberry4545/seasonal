import React from 'react';
import { EditTranslationsCountryNamePage } from './EditTranslationsCountryNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditTranslationsCountryNameForm: () => 'EditTranslationsCountryNameForm'
}));

describe('<EditTranslationsCountryNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditTranslationsCountryNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
