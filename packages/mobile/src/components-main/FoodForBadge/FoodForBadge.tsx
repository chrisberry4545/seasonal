import React, { FC } from 'react';
import { IFoodForBadgeProps } from './FoodForBadge.interface';
import { ImageGrid } from '../../components-layout';
import {
  TextMedium
} from '../../components-elements';
import { View, TextStyle } from 'react-native';

const styleFoodForBadgeFoundIn: TextStyle = {
  marginBottom: 12,
  textAlign: 'center',
  width: '100%'
};

export const FoodForBadge: FC<IFoodForBadgeProps> = ({
  isLoading,
  currentBadgeFood,
  onFoodSelected
}) => (
  !isLoading
    ? <View>
      <TextMedium style={styleFoodForBadgeFoundIn}>
        Found in
      </TextMedium>
      <ImageGrid data-e2e='food-for-badge-grid'
        data={currentBadgeFood} onClick={onFoodSelected} />
    </View>
    : null
);
