import React from 'react';
import { FoodAndRecipeTabs } from './FoodAndRecipeTabs';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';

describe('<FoodAndRecipeTabs />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FoodAndRecipeTabs
        foodScreen={() => <View></View>}
        recipeScreen={() => <View></View>}
      />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
