import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import ExternalLink from '../components/ExternalLink';

const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/avatar.jpeg')} style={{width: 250, height: 250, borderRadius: 9999999, marginHorizontal: 'auto'}} />
      <Text style={styles.title}>This news app created by me!</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <ExternalLink href={'https://github.com/FaxWeb7'}><Text style={{color: '#2f95dc', fontSize: 18}}>my GitHub | </Text></ExternalLink>
        <ExternalLink href={'https:/t.me/forexdohod_owner'}><Text style={{color: '#2f95dc', fontSize: 18}}>my Telegram</Text></ExternalLink>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -220
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 25
  },
});

export default ModalScreen;