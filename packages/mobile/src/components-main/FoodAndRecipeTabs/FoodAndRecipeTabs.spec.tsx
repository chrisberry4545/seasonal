import React from 'react';
import { FoodAndRecipeTabs } from './FoodAndRecipeTabs';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';

describe('<FoodAndRecipeTabs />', () => {
  let wrapper: ShallowWrapper;
  const generateComponent = () => <View></View>;

  describe('when there are recipes', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodAndRecipeTabs
          foodScreen={generateComponent}
          recipeScreen={generateComponent}
          hasRecipes={true}
        />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when there are no recipes', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodAndRecipeTabs
          foodScreen={generateComponent}
          recipeScreen={generateComponent}
          hasRecipes={false}
        />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

});
