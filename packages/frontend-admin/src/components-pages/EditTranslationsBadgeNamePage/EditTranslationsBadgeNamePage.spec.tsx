import React from 'react';
import { EditTranslationsBadgeNamePage } from './EditTranslationsBadgeNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditTranslationsBadgeNameForm: () => 'EditTranslationsBadgeNameForm'
}));

describe('<EditTranslationsBadgeNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditTranslationsBadgeNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
