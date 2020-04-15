import React from 'react';
import { ImageGridItem } from './ImageGridItem';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextMedium: () => 'TextMedium'
}));

describe('<ImageGridItem />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ImageGridItem
        id='id'
        name='name'
        imageUrlSmall='http://image.com'
        onClick={mockOnClick}
        hasBottomBorder={true}
        paddingLeft={10}
        paddingRight={30}
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

  describe('when there is no bottom border', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ImageGridItem
          id='id'
          name='name'
          imageUrlSmall='http://image.com'
          onClick={mockOnClick}
          hasBottomBorder={false}
          paddingLeft={10}
          paddingRight={30}
          width={25}
        />
      );
    });

    test('does not add a bottom border', () =>
      expect(wrapper.find(BareButton).first().props().style?.borderWidth)
        .toBeUndefined());
  });

  describe('when the button is not clickable', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ImageGridItem
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
