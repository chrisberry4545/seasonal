import React from 'react';
import { CreateTranslationsBadgeNamePage } from './CreateTranslationsBadgeNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateTranslationsBadgeNameForm: () => 'CreateTranslationsBadgeNameForm'
}));

describe('<CreateTranslationsBadgeNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateTranslationsBadgeNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
