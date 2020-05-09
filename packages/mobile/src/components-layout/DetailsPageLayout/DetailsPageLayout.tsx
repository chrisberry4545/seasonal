import React, { FC } from 'react';
import { DefaultPaddingContainer } from '../DefaultPaddingContainer/DefaultPaddingContainer';
import { ScrollView } from 'react-native-gesture-handler';
import { View, ViewStyle } from 'react-native';

const styleDetailsPageLayout: ViewStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 500
};

export const DetailsPageLayout: FC<{}> = ({
  children
}) => (
  <DefaultPaddingContainer>
    <ScrollView>
      <View style={styleDetailsPageLayout}>
        <View>
          { children }
        </View>
      </View>
    </ScrollView>
  </DefaultPaddingContainer>
);
