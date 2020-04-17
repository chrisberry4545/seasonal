import React from 'react';
import { PrivacyPolicyLink } from './PrivacyPolicyLink';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';
import { Linking } from 'react-native';
import { PRIVACY_POLICY_URL } from '../../config';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<PrivacyPolicyLink />', () => {
  let wrapper: ShallowWrapper;
  let mockOpenUrl: jest.SpyInstance;

  beforeEach(() => {
    jest.spyOn(Linking, 'canOpenURL')
      .mockResolvedValue(true);
    mockOpenUrl = jest.spyOn(Linking, 'openURL');
    mockOpenUrl.mockClear();
    wrapper = shallow(
      <PrivacyPolicyLink />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('opens privacy policy link when clicked', (done) => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      expect(mockOpenUrl).toHaveBeenCalledWith(PRIVACY_POLICY_URL);
      done();
    });
  });

  test('does not open anything if the URL cannot be opened', (done) => {
    jest.spyOn(Linking, 'canOpenURL')
      .mockResolvedValue(false);
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      expect(mockOpenUrl).not.toHaveBeenCalled();
      done();
    });
  });
});
