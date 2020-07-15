import React from 'react';
import { EditTranslationsRegionNamePage } from './EditTranslationsRegionNamePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditTranslationsRegionNameForm: () => 'EditTranslationsRegionNameForm'
}));

describe('<EditTranslationsRegionNamePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditTranslationsRegionNamePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
