import React, { FC } from 'react';
import {
  IFoodBadgesProps
} from './FoodBadges.interface';
import {
  BareButton,
  TextHeadingSmall,
  TextMedium
} from '../../components-elements';
import { ViewStyle, View, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from '../../styles';
import { shadows } from '../../styles/shadows';
import i18n from 'i18n-js';

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

export const FoodBadges: FC<IFoodBadgesProps> = ({
  badges,
  onBadgeClicked,
  isLoading
}) => (
  (!isLoading && badges && badges.length > 0)
    ? (
      <View style={styleBadges}>
        <TextHeadingSmall style={styleBadgesHeading}>
          {i18n.t('foodBadgesTitle')}
        </TextHeadingSmall>
        <View style={styleBadgesList}>
          {
            badges.map((badge) =>
              <BareButton
                onClick={() => onBadgeClicked(badge.id)}
                style={styleBadgesBadgeItem}
                key={badge.id}>
                  <TextMedium>
                    {badge.name}
                  </TextMedium>
              </BareButton>
            )
          }
        </View>
      </View>
    ) : null
);
