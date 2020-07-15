import React from 'react';
import { CreateTranslationsRegionNamePage } from './CreateTranslationsRegionNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateTranslationsRegionNameForm: () => 'CreateTranslationsRegionNameForm'
}));

describe('<CreateTranslationsRegionNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateTranslationsRegionNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
