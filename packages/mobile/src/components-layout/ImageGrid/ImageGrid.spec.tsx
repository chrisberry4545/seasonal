import React from 'react';
import { ImageGrid } from './ImageGrid';
import { shallow, ShallowWrapper } from 'enzyme';
import { IImageGridItem } from '../ImageGridItem/ImageGridItem.interface';
import { NoResultsText } from '../NoResultsText/NoResultsText';
import { ImageGridItem } from '../ImageGridItem/ImageGridItem';
import * as helpers from '../../helpers';

jest.mock('../ImageGridItem/ImageGridItem', () => ({
  ImageGridItem: () => 'ImageGridItem'
}));
jest.mock('../NoResultsText/NoResultsText', () => ({
  NoResultsText: () => 'NoResultsText'
}));

describe('<ImageGrid />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;
  const data = [{
    id: '1'
  }, {
    id: '2'
  }, {
    id: '3'
  }] as IImageGridItem[];

  beforeEach(() => {
    jest.spyOn(helpers, 'getScreenWidth').mockReturnValue(400);
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ImageGrid
        data={data}
        onClick={mockOnClick}
        noResultsMessage='No results'
        maxItemsPerRow={5} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('does not render the no results text', () =>
    expect(wrapper.find(NoResultsText).exists()).toBe(false));

  describe('when an item is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(ImageGridItem).first().props().onClick;
      if (onClick) {
        onClick('1');
      }
    });

    test('calls onClick', () => expect(mockOnClick).toHaveBeenCalledWith('1'));
  });

  describe('when there is no items', () => {
    beforeEach(() =>
      wrapper = shallow(
        <ImageGrid
          data={[]}
          onClick={mockOnClick}
          noResultsMessage='No results'
          maxItemsPerRow={5} />
      )
    );

    test('renders the no results text', () =>
      expect(wrapper.find(NoResultsText).exists()).toBe(true));
  });

  describe.each`
    screenWidth | expectedPaddingLeft | expectedPaddingRight     | expectedWidth
    ${499}      | ${0}                | ${'5%'}                  | ${'50%'}
    ${699}      | ${0}                | ${'3.3333333333333335%'} | ${'33.333333333333336%'}
    ${999}      | ${0}                | ${'2.5%'}                | ${'25%'}
    ${1000}     | ${0}                | ${'2%'}                  | ${'20%'}
  `('when the screenWidth is $screenWidth', ({
    screenWidth,
    expectedPaddingLeft,
    expectedPaddingRight,
    expectedWidth
  }) => {
    beforeEach(() => {
      jest.spyOn(helpers, 'getScreenWidth').mockReturnValue(screenWidth);
      wrapper = shallow(
        <ImageGrid
          data={data}
          onClick={mockOnClick}
          noResultsMessage='No results'
          maxItemsPerRow={5} />
      );
    });

    test('sets the width to the expected value', () =>
      expect(wrapper.find(ImageGridItem).first().props().width)
        .toBe(expectedWidth));

    test('sets the left padding to the expected value', () =>
      expect(wrapper.find(ImageGridItem).first().props().paddingLeft)
        .toBe(expectedPaddingLeft));

    test('sets the right padding to the expected value', () =>
      expect(wrapper.find(ImageGridItem).first().props().paddingRight)
        .toBe(expectedPaddingRight));
  });

  describe('when there is a maxItemsPerRow', () => {
    beforeEach(() => {
      jest.spyOn(helpers, 'getScreenWidth').mockReturnValue(1000);
      wrapper = shallow(
        <ImageGrid
          data={data}
          onClick={mockOnClick}
          noResultsMessage='No results'
          maxItemsPerRow={1} />
      );
    });

    test('sets the width accordingly', () =>
      expect(wrapper.find(ImageGridItem).first().props().width)
          .toBe('100%'));
  });
});
