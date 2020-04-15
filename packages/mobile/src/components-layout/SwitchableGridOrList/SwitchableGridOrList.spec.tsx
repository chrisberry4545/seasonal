import React from 'react';
import { SwitchableGridOrList } from './SwitchableGridOrList';
import { shallow, ShallowWrapper } from 'enzyme';
import { IImageGridItem } from '../ImageGridItem/ImageGridItem.interface';
import { ImageList } from '../ImageList/ImageList';
import { ImageGrid } from '../ImageGrid/ImageGrid';
import { BareButton } from '../../components-elements';

jest.mock('../ImageGrid/ImageGrid', () => ({
  ImageGrid: () => 'ImageGrid'
}));
jest.mock('../ImageList/ImageList', () => ({
  ImageList: () => 'ImageList'
}));
jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  GridIcon: () => 'GridIcon',
  ListIcon: () => 'ListIcon',
  TextSmall: () => 'TextSmall'
}));

describe('<SwitchableGridOrList />', () => {
  let wrapper: ShallowWrapper;
  let mockOnToggleListViewShown: jest.Mock;
  let mockOnClick: jest.Mock;
  const data = [{}, {}] as IImageGridItem[];

  beforeEach(() => {
    mockOnToggleListViewShown = jest.fn();
    mockOnClick = jest.fn();
  });

  describe('when list view is shown', () => {
    beforeEach(() => {
      wrapper = shallow(
        <SwitchableGridOrList
          data={data}
          isListViewShown={true}
          onClick={mockOnClick}
          onToggleListView={mockOnToggleListViewShown} />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('onClick can be pressed', () => {
      const onClick = wrapper.find(ImageList).props().onClick;
      if (onClick) {
        onClick('1');
      }
      expect(mockOnClick).toHaveBeenCalledWith('1');
    });

    test('can toggle the view', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnToggleListViewShown).toHaveBeenCalled();
    });
  });

  describe('when grid view is shown', () => {
    beforeEach(() => {
      wrapper = shallow(
        <SwitchableGridOrList
          data={data}
          isListViewShown={false}
          onClick={mockOnClick}
          onToggleListView={mockOnToggleListViewShown} />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('onClick can be pressed', () => {
      const onClick = wrapper.find(ImageGrid).props().onClick;
      if (onClick) {
        onClick('1');
      }
      expect(mockOnClick).toHaveBeenCalledWith('1');
    });

    test('can toggle the view', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnToggleListViewShown).toHaveBeenCalled();
    });

  });

});
