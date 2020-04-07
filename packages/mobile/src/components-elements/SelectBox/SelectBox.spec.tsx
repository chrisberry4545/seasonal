import React from 'react';
import { SelectBox } from './SelectBox';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../Buttons';
import { ISelectOption } from '@chrisb-dev/seasonal-shared-models';

jest.mock('../Buttons', () => ({
  BareButton: () => 'BareButton'
}));
jest.mock('../Text', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<SelectBox />', () => {
  let wrapper: ShallowWrapper;
  let mockOnSelected: jest.Mock;
  const selectOptions = [
    {
      isSelected: false,
      name: 'n1',
      value: 'v1'
    },
    {
      isSelected: true,
      name: 'n2',
      value: 'v2'
    }
  ] as ISelectOption[];

  beforeEach(() => {
    mockOnSelected = jest.fn();
    wrapper = shallow(
      <SelectBox
        options={selectOptions}
        onSelected={mockOnSelected} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls onSelected when an option is clicked', () => {
    const onClickProp = wrapper.find(BareButton).first().props().onClick;
    if (onClickProp) {
      onClickProp();
    }
    expect(mockOnSelected).toHaveBeenCalledWith(selectOptions[0].value);
  });

  describe('when no onSelectedValue is provided', () => {

    beforeEach(() => {
      wrapper = shallow(<SelectBox options={selectOptions} />);
    });

    test('does not call onSelected when pressed', () => {
      const onClickProp = wrapper.find(BareButton).first().props().onClick;
      if (onClickProp) {
        onClickProp();
      }
      expect(mockOnSelected).not.toHaveBeenCalled();
    });
  });
});
