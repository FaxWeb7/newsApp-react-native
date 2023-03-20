import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import ExternalLink from './ExternalLink';
import { Text, View } from './Themed';

const EditScreenInfo = ({ path }: { path: string }) => {
return (
      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
  );
}

const styles = StyleSheet.create({
  helpContainer: {
    marginTop: -15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

export default EditScreenInfo;