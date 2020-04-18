import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PageLayout } from '../PageLayout/PageLayout';

describe('<PageLayout />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <PageLayout>
          Children
      </PageLayout>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
