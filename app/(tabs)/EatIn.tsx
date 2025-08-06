import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

export default function RecipePage() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');

    


}