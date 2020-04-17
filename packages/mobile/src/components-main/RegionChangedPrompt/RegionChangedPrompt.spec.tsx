import React from 'react';
import { RegionChangedPrompt } from './RegionChangedPrompt';
import { shallow, ShallowWrapper } from 'enzyme';
import { IRegion } from '@chrisb-dev/seasonal-shared-models';
import { Toast } from '../../components-layout';
import { BareButton } from '../../components-elements';

jest.mock('../../components-layout', () => ({
  Toast: () => 'Toast'
}));
jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextLarge: () => 'TextLarge'
}));

describe('<RegionChangedPrompt />', () => {
  let wrapper: ShallowWrapper;
  let mockHideRegionChangedPrompt: jest.Mock;
  let mockShowRegionSelector: jest.Mock;
  const currentRegion = {
    id: '1'
  } as IRegion;

  beforeEach(() => {
    mockHideRegionChangedPrompt = jest.fn();
    mockShowRegionSelector = jest.fn();
    wrapper = shallow(
      <RegionChangedPrompt
        isVisible={true}
        currentRegion={currentRegion}
        hideRegionChangedPrompt={mockHideRegionChangedPrompt}
        showRegionSelector={mockShowRegionSelector} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the prompt', () => {
    const onClose = wrapper.find(Toast).first().props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockHideRegionChangedPrompt).toHaveBeenCalled();
  });

  test('can click to change the region', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockShowRegionSelector).toHaveBeenCalled();
  });

  test('is not visible if isVisible is false', () => {
    wrapper = shallow(
      <RegionChangedPrompt
        isVisible={false}
        currentRegion={currentRegion}
        hideRegionChangedPrompt={mockHideRegionChangedPrompt}
        showRegionSelector={mockShowRegionSelector} />
    );
    expect(wrapper.find(Toast).props().isVisible).toBe(false);
  });

  test('is not visible if currentRegion is undefined', () => {
    wrapper = shallow(
      <RegionChangedPrompt
        isVisible={true}
        currentRegion={undefined}
        hideRegionChangedPrompt={mockHideRegionChangedPrompt}
        showRegionSelector={mockShowRegionSelector} />
    );
    expect(wrapper.find(Toast).props().isVisible).toBe(false);
  });
});
