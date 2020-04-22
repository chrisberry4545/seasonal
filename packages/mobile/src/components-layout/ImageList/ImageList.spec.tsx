import React from 'react';
import { ImageList } from './ImageList';
import { shallow, ShallowWrapper } from 'enzyme';
import { IImageGridItem } from '../ImageGridItem/ImageGridItem.interface';
import { ImageListItem } from '../ImageListItem/ImageListItem';
import { NoResultsText } from '../NoResultsText/NoResultsText';
import * as helpers from '../../helpers';

jest.mock('../ImageListItem/ImageListItem', () => ({
  ImageListItem: () => 'ImageListItem'
}));
jest.mock('../NoResultsText/NoResultsText', () => ({
  NoResultsText: () => 'NoResultsText'
}));

describe('<ImageList />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;
  const data = [{
    id: '1'
  }, {
    id: '2'
  }] as IImageGridItem[];

  beforeEach(() => {
    jest.spyOn(helpers, 'getScreenWidth').mockReturnValue(499);
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ImageList
        data={data}
        onClick={mockOnClick}
        noResultsMessage='No results' />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('does not show NoResultsText', () =>
    expect(wrapper.find(NoResultsText).exists()).toBe(false));

  describe('when an item is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(ImageListItem).first().props().onClick;
      if (onClick) {
        onClick('1');
      }
    });

    test('calls onClick', () => expect(mockOnClick).toHaveBeenCalledWith('1'));
  });

  describe('when there are no results', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ImageList
          data={[]}
          onClick={mockOnClick}
          noResultsMessage='No results' />
      );
    });

    test('shows NoResultsText', () =>
      expect(wrapper.find(NoResultsText).exists()).toBe(true));
  });

  describe.each`
    screenWidth | expectedWidth
    ${500}      | ${'50%'}
    ${700}      | ${'33.333333333333336%'}
    ${1000}     | ${'25%'}
  `('sets the correct width', ({ screenWidth, expectedWidth }) => {

    beforeEach(() => {
      jest.spyOn(helpers, 'getScreenWidth').mockReturnValue(screenWidth);
      wrapper = shallow(
        <ImageList
          data={data}
          onClick={mockOnClick}
          noResultsMessage='No results' />
      );
    });

    test('screen width should be set correctly', () =>
      expect(wrapper.find(ImageListItem).first().props().width).toBe(expectedWidth));
  });
});
