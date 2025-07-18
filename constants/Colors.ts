/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: '#000000',
    secondary: '#575757',
    white: '#FFFFFF',
    background: '#FFFFFF',
    homeIndicator: '#101010',
    
    tint: tintColorLight,
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    textPrimary: '#000000',
    textSecondary: '#666666',
    cardBackground: '#F5F5F5',
    
    accent: '#F5D76E',
    success: '#98FB98',
    warning: '#FFB6C1',
  },
  dark: {
    primary: '#FFFFFF',
    secondary: '#A8A8A8',
    white: '#FFFFFF',
    background: '#121212',
    homeIndicator: '#FFFFFF',
    
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    textPrimary: '#FFFFFF',
    textSecondary: '#A8A8A8',
    cardBackground: '#1E1E1E',
    
    accent: '#FFE677',
    success: '#98FB98',
    warning: '#FFB6C1',
  },
};