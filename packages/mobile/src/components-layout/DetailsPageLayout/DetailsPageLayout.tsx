import React, { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, ViewStyle } from 'react-native';

const styleDetailsPageLayout: ViewStyle = {
  marginBottom: 50,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 500
};

export const DetailsPageLayout: FC<{}> = ({
  children
}) => (
  <ScrollView>
    <View style={styleDetailsPageLayout}>
      <View>
        { children }
      </View>
    </View>
  </ScrollView>
);
