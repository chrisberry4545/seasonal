import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ImageGrid } from './ImageGrid';
import { TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';
import { IImageGridItem } from '../ImageGridItem/ImageGridItem.interface';
import { ImageGridItem } from '../ImageGridItem/ImageGridItem';

jest.mock('../ImageGridItem/ImageGridItem', () => ({
  ImageGridItem: () => 'ImageGridItem'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<ImageGrid />', () => {
  let wrapper: ShallowWrapper;
  const data = [{
    id: '1',
    name: 'n1'
  }, {
    id: '2',
    name: 'n2'
  }] as IImageGridItem[];
  let mockOnClick: jest.Mock;

  const getNoResultsElement = () =>
    wrapper.findWhere((el) =>
      el.type() === TextMedium
      && el.children().text() === 'No results found'
    );

  beforeEach(() =>
    mockOnClick = jest.fn()
  );

  describe('when there are data items', () => {
    beforeEach(() =>
      wrapper = shallow(
        <ImageGrid
          data={data}
          onClick={mockOnClick} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click items', () => {
      const onClick = wrapper.find(ImageGridItem).first().props().onClick;
      if (onClick) {
        onClick('id');
      }
      expect(mockOnClick).toHaveBeenCalledWith('id');
    });

  });

  describe('when the data has a length of 0', () => {
    beforeEach(() =>
      wrapper = shallow(
        <ImageGrid
          data={[]}
          onClick={mockOnClick} />
      )
    );

    test('renders the no results found message', () =>
      expect(getNoResultsElement().exists()).toBe(true));
  });

  describe('when the data is undefined', () => {
    beforeEach(() =>
      wrapper = shallow(
        <ImageGrid
          data={undefined}
          onClick={mockOnClick} />
      )
    );

    test('renders the no results found message', () =>
      expect(getNoResultsElement().exists()).toBe(true));
  });

});
