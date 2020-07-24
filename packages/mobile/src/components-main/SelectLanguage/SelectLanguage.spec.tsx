import React from 'react';
import { SelectLanguage } from './SelectLanguage';
import { shallow, ShallowWrapper } from 'enzyme';
import { SelectBox } from '../../components-elements';
import { ISelectOption } from '@chrisb-dev/seasonal-shared-models';

jest.mock('../../components-elements', () => ({
  SelectBox: () => 'SelectBox',
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<SelectLanguage />', () => {
  let wrapper: ShallowWrapper;
  const languages = [{}, {}] as ISelectOption[];
  let mockOnLanguageSelected: jest.Mock;

  beforeEach(() => {
    mockOnLanguageSelected = jest.fn();
    wrapper = shallow(
      <SelectLanguage
        languages={languages}
        onLanguageSelected={mockOnLanguageSelected}>
          Children
      </SelectLanguage>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can select a language', () => {
    const onSelected = wrapper.find(SelectBox).first().props().onSelected;
    if (onSelected) {
      onSelected('id');
    }
    expect(mockOnLanguageSelected).toHaveBeenCalledWith('id');
  });

});
