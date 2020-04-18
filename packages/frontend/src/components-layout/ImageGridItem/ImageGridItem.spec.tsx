import React, { MouseEvent } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ImageGridItem } from '../ImageGridItem/ImageGridItem';

jest.mock('../../components-elements', () => ({
  BackgroundImageWithLoadingSpinner: () => 'BackgroundImageWithLoadingSpinner'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<ImageGridItem />', () => {
  let wrapper: ShallowWrapper;
  const id = '1';
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <ImageGridItem
        id={id}
        imageUrlSmall='https://image.com'
        onClick={mockOnClick}
        name='name'
        skipAnimation={true} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can click items', () => {
    const onClick = wrapper.find('div').first().props().onClick;
    if (onClick) {
      onClick({} as MouseEvent);
    }
    expect(mockOnClick).toHaveBeenCalledWith(id);
  });

});
