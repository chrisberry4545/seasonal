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
    style={[
      styleSideMenuButton,
      ...(
        isSelected
          ? [styleSideMenuButtonSelected]
          : []
      )
    ]}
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
  onGoToSettingsPage
}) => (
  <View style={styleSideMenu}>
    <ScrollView style={styleSideMenuInner}>
      {
        !isLoading
          ? (<Fragment>
            {
              renderSideMenuButton({
                isSelected: isCurrentRouteSettings,
                name: 'Change region',
                onClick: onGoToSettingsPage
              })
            }
            {
              renderSideMenuButton({
                isSelected: isCurrentRouteAllSeasons,
                name: 'All seasons',
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
                name: 'About us',
                onClick: onGoToAboutUsPage
              })
            }
            </Fragment>)
          : <LoadingSpinner style={styleSideMenuLoadingSpinner} />
      }
    </ScrollView>
  </View>
);
