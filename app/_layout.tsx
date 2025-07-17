import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    InknutAntiquaBlack: require('../assets/fonts/InknutAntiqua-Black.ttf'),
    InknutAntiquaBold: require('../assets/fonts/InknutAntiqua-Bold.ttf'),
    InknutAntiquaExtraBold: require('../assets/fonts/InknutAntiqua-ExtraBold.ttf'),
    InknutAntiquaLight: require('../assets/fonts/InknutAntiqua-Light.ttf'),
    InknutAntiquaMedium: require('../assets/fonts/InknutAntiqua-Medium.ttf'),
    InknutAntiquaRegular: require('../assets/fonts/InknutAntiqua-Regular.ttf'),
    InknutAntiquaSemiBold: require('../assets/fonts/InknutAntiqua-SemiBold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
