import React, { Fragment, FC } from 'react';
import {
  BareButton,
  TextMedium,
  LoadingSpinner
} from '../../components-elements';
import { ISideMenuProps } from './SideMenu.interface';
import { ViewStyle, TextStyle, View } from 'react-native';
import { styles } from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import i18n from 'i18n-js';

const styleSideMenu: ViewStyle = {
  flex: 1,
  marginBottom: 60,
  paddingTop: 60
};

const styleSideMenuInner: ViewStyle = {
  flex: 1
};

const styleSideMenuButton: TextStyle = {
  padding: 18
};

const styleSideMenuButtonSelected: TextStyle = {
  backgroundColor: styles.colors.greyLight
};

const styleSideMenuLoadingSpinner: ViewStyle = {
  flex: 1
};

const renderSideMenuButton = ({
  name,
  isSelected,
  onClick,
  key
}: {
  name: string
  isSelected: boolean,
  onClick: () => void,
  key?: string
}) => (
  <BareButton
    key={key}
    style={{
      ...styleSideMenuButton,
      ...(
        isSelected
          ? styleSideMenuButtonSelected
          : {}
      )
    }}
    onClick={onClick}>
    <TextMedium>{ name }</TextMedium>
  </BareButton>
);

export const SideMenu: FC<ISideMenuProps> = ({
  allBasicSeasonData,
  currentSeasonIndex,
  isLoading,
  isCurrentRouteAboutUs,
  isCurrentRouteSettings,
  isCurrentRouteAllSeasons,
  isCurrentRouteSeasonDetails,
  onAllSeasonsSelected,
  onSeasonSelected,
  onGoToAboutUsPage,
  onGoToSettingsPage,
  onMenuFeedbackSelected
}) => (
  <View style={styleSideMenu}>
    <ScrollView style={styleSideMenuInner}>
      {
        !isLoading
          ? (<Fragment>
            {
              renderSideMenuButton({
                isSelected: isCurrentRouteSettings,
                name: i18n.t('menuChangeRegion'),
                onClick: onGoToSettingsPage
              })
            }
            {
              renderSideMenuButton({
                isSelected: isCurrentRouteAllSeasons,
                name: i18n.t('menuAllSeasons'),
                onClick: onAllSeasonsSelected
              })
            }
            {
              allBasicSeasonData &&
              allBasicSeasonData.map(({ name }, index) => (
                renderSideMenuButton({
                  isSelected: isCurrentRouteSeasonDetails &&
                    index === currentSeasonIndex,
                  key: name,
                  name,
                  onClick: () => onSeasonSelected(index)
                })
              ))
            }
            {
              renderSideMenuButton({
                isSelected: isCurrentRouteAboutUs,
                name: i18n.t('menuAboutUs'),
                onClick: onGoToAboutUsPage
              })
            }
            {
              renderSideMenuButton({
                isSelected: false,
                name: i18n.t('menuGiveFeedback'),
                onClick: onMenuFeedbackSelected
              })
            }
            </Fragment>)
          : <LoadingSpinner style={styleSideMenuLoadingSpinner} />
      }
    </ScrollView>
  </View>
);
