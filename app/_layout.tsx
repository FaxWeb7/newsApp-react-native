import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Text } from '../components/Themed';
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    mtSemibold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    mtMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    mtRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    mtLight: require('../assets/fonts/Montserrat-Light.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <> 
      {!loaded && <SplashScreen />} 
      {loaded && (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="(newsItem)/[newsId]" options={{headerTitle: 'Просмотр новости'}} />
          </Stack>
        </ThemeProvider>
      )} 
    </>
  )
}

export default RootLayout;