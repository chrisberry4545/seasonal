import React, { FC } from 'react';
import {
  IFoodBadgesInputProps
} from './FoodBadges.interface';
import { TextHeadingSmall, TextMedium } from '../../components-elements';
import { ViewStyle, View, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from '../../styles';
import { shadows } from '../../styles/shadows';

const styleBadges: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  paddingBottom: 33
};

const styleBadgesHeading: TextStyle = {
  marginBottom: 16,
  marginTop: 24,
  textAlign: 'center',
  width: '100%'
};

const styleBadgesList: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const styleBadgesBadgeItem: TextStyle = {
  ...shadows.level1,
  backgroundColor: colors.selectionColorAlt,
  borderRadius: 8,
  color: colors.black,
  marginBottom: 10,
  marginEnd: 10,
  padding: 10
};

export const FoodBadges: FC<IFoodBadgesInputProps> = ({
  badges
}) => (
  (badges && badges.length > 0)
    ? (
      <View style={styleBadges}>
        <TextHeadingSmall style={styleBadgesHeading}>
          Nutrition
        </TextHeadingSmall>
        <View style={styleBadgesList}>
          {
            badges.map((badge) =>
              <View
                style={styleBadgesBadgeItem}
                key={badge.id}>
                  <TextMedium>
                    {badge.name}
                  </TextMedium>
              </View>
            )
          }
        </View>
      </View>
    ) : null
);
