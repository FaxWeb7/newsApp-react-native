import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';


const TabBarIcon = (props: {name: React.ComponentProps<typeof FontAwesome>['name']; color: string;}) => { return <FontAwesome size={28} style={{ marginBottom: -5 }} {...props} /> }


const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,}}>
      <Tabs.Screen name="index" options={{
          title: 'Latest news list',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
          headerLeft: () => (
            <Image source={require('../../assets/images/icon.png')} style={{width: 48, height: 48}} />
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
      <Tabs.Screen name="addNews" options={{
          title: 'Add news',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square-o" color={color} />,
        }} />
    </Tabs>
  );
}

export default TabLayout;