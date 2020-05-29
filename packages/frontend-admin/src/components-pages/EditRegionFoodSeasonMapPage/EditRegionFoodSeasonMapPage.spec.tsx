import React from 'react';
import { EditRegionFoodSeasonMapPage } from './EditRegionFoodSeasonMapPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditRegionFoodSeasonMapForm: () => 'EditRegionFoodSeasonMapForm'
}));

describe('<EditRegionFoodSeasonMapPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditRegionFoodSeasonMapPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
