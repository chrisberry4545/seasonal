
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ViewWebAppVersion } from './ViewWebAppVersion';
import { PrimaryButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  PrimaryButton: () => 'PrimaryButton'
}));

describe('<ViewWebAppVersion />', () => {
  let wrapper: ShallowWrapper;
  let mockOnGoToWebVersion: jest.Mock;

  beforeEach(() => {
    mockOnGoToWebVersion = jest.fn();
    wrapper = shallow(
       <ViewWebAppVersion
        onGoToWebVersion={mockOnGoToWebVersion} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('goes to web version when clicked', () => {
    const onClick = wrapper.find(PrimaryButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnGoToWebVersion).toHaveBeenCalled();
  });

});
