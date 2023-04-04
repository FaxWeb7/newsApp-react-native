import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation, useRouter } from 'expo-router';
import { Image, Pressable, TouchableOpacity, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';


const TabBarIcon = (props: {name: React.ComponentProps<typeof FontAwesome>['name']; color: string;}) => { return <FontAwesome size={28} style={{ marginTop: 9 }} {...props} /> }


const TabLayout = () => {
  const colorScheme = useColorScheme();
  const router = useRouter()

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,}}>
      <Tabs.Screen name="index" options={{
          title: 'Top Business News',
          headerTitle: 'Top Business News',
          headerTitleStyle: {fontSize: 18.5, marginTop: 5},
          headerRightContainerStyle: {marginTop: 5},
          headerBackgroundContainerStyle: {marginBottom: -12},
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push('/')}>{colorScheme === 'light' ? <Image source={require('../../assets/images/light-icon.png')} style={{width: 38, height: 38, marginLeft: 16, borderRadius: 3, marginTop: 5}} /> : <Image source={require('../../assets/images/dark-icon.png')} style={{width: 38, height: 38, marginLeft: 16, borderRadius: 3, marginTop: 5}} /> }</TouchableOpacity>
            ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, width: 24, height: 24, tintColor: Colors[colorScheme ?? 'light'].text }} source={{uri: 'https://cdn-icons-png.flaticon.com/512/471/471662.png'}} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen name="wstNews" options={{
          title: 'Wall Street Articles',
          headerTitle: 'Wall Street Articles',
          headerTitleStyle: {fontSize: 18.5, marginTop: 5},
          headerRightContainerStyle: {marginTop: 5},
          headerBackgroundContainerStyle: {marginBottom: -12},
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
          headerLeft: () => (
          <TouchableOpacity onPress={() => router.push('/')}>{colorScheme === 'light' ? <Image source={require('../../assets/images/light-icon.png')} style={{width: 38, height: 38, marginLeft: 16, borderRadius: 3, marginTop: 5}} /> : <Image source={require('../../assets/images/dark-icon.png')} style={{width: 38, height: 38, marginLeft: 16, borderRadius: 3, marginTop: 5}} /> }</TouchableOpacity>
            ),
        }} />
    </Tabs>
  );
}

export default TabLayout;