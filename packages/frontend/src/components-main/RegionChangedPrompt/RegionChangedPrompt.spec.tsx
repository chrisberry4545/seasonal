
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RegionChangedPrompt } from './RegionChangedPrompt';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { IRegion } from '@chrisb-dev/seasonal-shared-models';
import { IRegionChangedPromptProps } from './RegionChangedPrompt.interface';
import { Toast } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  Toast: () => 'Toast'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  TextMedium: () => 'TextMedium'
}));

describe('<RegionChangedPrompt />', () => {
  let wrapper: ShallowWrapper;
  const currentRegion = { id: '1' } as IRegion;
  let mockHideRegionChangedPrompt: jest.Mock;
  let mockShowRegionSelector: jest.Mock;

  const initProps = (): IRegionChangedPromptProps => ({
    currentRegion,
    hideRegionChangedPrompt: mockHideRegionChangedPrompt,
    isVisible: true,
    showRegionSelector: mockShowRegionSelector
  });

  beforeEach(() => {
    mockHideRegionChangedPrompt = jest.fn();
    mockShowRegionSelector = jest.fn();
    wrapper = shallow(
      <RegionChangedPrompt {...initProps()} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the toast', () => {
    const onClose = wrapper.find(Toast).first().props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockHideRegionChangedPrompt).toHaveBeenCalled();
  });

  test('can open the region selector', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockShowRegionSelector).toHaveBeenCalled();
  });

});
