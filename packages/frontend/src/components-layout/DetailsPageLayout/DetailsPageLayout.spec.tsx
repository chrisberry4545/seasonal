import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DetailsPageLayout } from './DetailsPageLayout';

describe('<DetailsPageLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <DetailsPageLayout>
        Children
      </DetailsPageLayout>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
