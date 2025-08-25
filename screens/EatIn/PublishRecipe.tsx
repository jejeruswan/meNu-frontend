import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import { BlurView } from 'expo-blur';

import React, {useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function PublishRecipe({ onClose }) {
    const [restaurantName, setRestaurantName] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setdescription] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
            Your recipe is published.{"\n"}
            Well done, Chef!
            </Text>
            {/* for buttons */}
            <TouchableOpacity onPress={onClose} style={styles.crossButton}>
                <Image 
                    source={require('../../assets/images/cross-button.png')}
                    style={{ width: 33, height: 33 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 15,
      width: 348,
      height: 540,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontFamily: 'InknutAntiquaRegular',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    },
    crossButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        width: 33, 
        height: 33, 
    },
});