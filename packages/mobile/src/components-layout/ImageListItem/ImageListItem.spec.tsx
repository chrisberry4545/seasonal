import React from 'react';
import { ImageListItem } from './ImageListItem';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextMedium: () => 'TextMedium'
}));

describe('<ImageListItem />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ImageListItem
        id='id'
        name='name'
        imageUrlSmall='http://image.com'
        onClick={mockOnClick}
        width={25}
      />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when an item is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('calls onClick', () => expect(mockOnClick).toHaveBeenCalledWith('id'));
  });

  describe('when the button is not clickable', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ImageListItem
          id='id'
          name='name'
          imageUrlSmall='http://image.com'
          hasBottomBorder={false}
          paddingLeft={10}
          paddingRight={30}
          width={25}
        />
      );
    });

    test('sets the activeOpacity to 100%', () =>
      expect(wrapper.find(BareButton).first().props().activeOpacity)
        .toBe(1));
  });
});
