
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BadgesTopSection } from './BadgesTopSection';
import { HeaderAndBackButton } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  HeaderAndBackButton: () => 'HeaderAndBackButton'
}));

describe('<BadgesTopSection />', () => {
  let wrapper: ShallowWrapper;
  const badgeName = 'Badge';
  let mockOnGoBack: jest.Mock;

  beforeEach(() =>
    mockOnGoBack = jest.fn()
  );

  describe('when the badge has finished loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <BadgesTopSection
          badgeName={badgeName}
          isLoading={false}
          onGoBack={mockOnGoBack} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can go back from badge details', () => {
      const onGoBack = wrapper.find(HeaderAndBackButton).props().onGoBack;
      if (onGoBack) {
        onGoBack();
      }
      expect(mockOnGoBack).toHaveBeenCalled();
    });

  });

  describe('when the badge is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <BadgesTopSection
          badgeName={badgeName}
          isLoading={true}
          onGoBack={mockOnGoBack} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
