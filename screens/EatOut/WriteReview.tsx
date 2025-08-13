import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';

import React, {useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function WriteReview({ onClose }) {
    const [restaurantName, setRestaurantName] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setdescription] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's write a review!</Text>
            {/* for buttons */}
            <TouchableOpacity onPress={onClose} style={styles.crossButton}>
                <Image 
                    source={require('../../assets/images/cross-button.png')}
                    style={{ width: 33, height: 33 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <View style={styles.row}>
                <Text style={styles.restinfo}>Restaurant</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type here..."
                    value={restaurantName}
                    onChangeText={setRestaurantName}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.revinfo}>Rating</Text>
                <View style={styles.row}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity
                            key={star}
                             onPress={() => setRating(star)}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={[
                                styles.star,
                                { color: star <= rating ? '#B1643B' : '#ccc' },
                                ]}
                            >
                                ★
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Text style={styles.descinfo}>Description</Text>

            <View style={styles.descrow}>
                <TextInput
                    multiline
                    style={styles.descinput}
                    placeholder="Type here..."
                    value={description}
                    onChangeText={setdescription}
                />
            </View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
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
    },
    title: {
        fontFamily: 'InknutAntiquaRegular',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    descrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontFamily: 'System', 
        fontSize: 16,
        fontWeight: '600',
    },
    crossButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        width: 33, 
        height: 33, 
    },
    restinfo: {
        fontFamily: 'System',
        fontSize: 20,
        textAlign: 'left',
        marginRight: 12,
    },
    revinfo: {
        fontFamily: 'System',
        fontSize: 20,
        textAlign: 'left',
        marginRight: 49,
    },
    descinfo: {
        fontFamily: 'System',
        fontSize: 20,
        textAlign: 'left',
        marginRight: 12,
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        flex: 1, // takes remaining width
        backgroundColor: '#ccc', // gray background
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    descinput: {
        flex: 1, // takes remaining width
        backgroundColor: '#ccc', // gray background
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        height: 220,
    },
    star: {
        fontSize: 28,
        lineHeight: 28,
        alignItems: 'center',
        marginHorizontal: 6,
        marginTop: -17,
    },
});