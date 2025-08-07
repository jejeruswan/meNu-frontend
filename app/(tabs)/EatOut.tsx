import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
    FlatList,
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';

// Mock Reviews 

const friendsReviews = [
    {
        id: '1',
        name: 'John',
        restaurant: 'Odette',
        profilePic: require('@/assets/images/mock-users/john.jpg'),
        time: 'Today 14:50',
        rating: '★★★☆☆ 1/2',
        review: '10/10 service honestly. The Kampot pepper butter? Absolute magic. I audibly gasped...',
        likes: 134,
    },
    {
        id: '2',
        name: 'Marissa',
        restaurant: 'Sauce District',
        profilePic: require('@/assets/images/mock-users/marissa.jpg'),
        time: 'Today 12:37',
        rating: '★★☆☆☆',
        review: 'tbh...not worth the hype. I was expecting more from the viral “miso-glazed black cod”…',
        likes: 88,
    },
];

const followingReviews = [
    {
        id: '3',
        name: 'Stacy',
        restaurant: 'Bun Intended',
        profilePic: require('@/assets/images/mock-users/stacy.jpg'),
        time: '15 July 2025',
        rating: '★★★★★ 1/2',
        review: 'BEST CROISSANTS EVER!!!! MUST TRY IF UR IN THE CITY!!!',
        likes: 9,
      },
];

export default function ReviewPage() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');

    const [selectedTab, setSelectedTab] = useState('Friends');

    const renderReviewCard = ({ item }) => (
        <View style={styles.reviewCard}>
            <Image source={item.profilePic} style={styles.profilePic} />
            <View style={{ flex: 1 }}>
                <ThemedText style={styles.time}>{item.time}</ThemedText>
                <ThemedText style={styles.reviewHeader}>
                    {item.name} <ThemedText style={styles.restaurant}>@ {item.restaurant}</ThemedText>
                </ThemedText>
                <ThemedText style={styles.reviewText} numberOfLines={2}>{item.review}</ThemedText>
                <View style={styles.reviewFooter}>
                    <ThemedText>❤️ {item.likes} likes</ThemedText>
                    <ThemedText style={styles.readMore}>Read More</ThemedText>
                </View>
            </View>
            <ThemedText style={styles.rating}>{item.rating}</ThemedText>
        </View>

    );

    return (
        <ScrollView style={styles.container}>
            {/* meNu Title*/}
            <View style={styles.header}>
                <ThemedText style={[styles.headerTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaRegular' }]}>
                    meNu
                </ThemedText>
            </View>

            {/* Review Title */}
            <View style={styles.sectionHeader}>
                <ThemedText style={styles.sectionTitle}>
                    Let's Taco 'Bout It
                </ThemedText>
                <TouchableOpacity style={styles.reviewButton}>
                    <ThemedText style={styles.reviewButtonText}>+ Write a Review</ThemedText>
                </TouchableOpacity>
            </View>

            {/* Friends/Followers Toggle */}
            <View style={styles.toggleContainer}>
                {['Friends', 'Followers'].map(tab => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.toggleButton,
                        selectedTab === tab && styles.activeToggle,
                    ]}
                    onPress={() => setSelectedTab(tab)}>
                    <ThemedText
                        style={[
                            styles.toggleText,
                            selectedTab === tab && styles.activeToggleText,
                        ]}>
                        {tab}
                    </ThemedText>
                </TouchableOpacity>
                ))}
            </View>


            {/* Reviews */}
            <FlatList
                data={selectedTab === 'Friends' ? friendsReviews : followingReviews}
                keyExtractor={item => item.id}
                renderItem={renderReviewCard}
                style={{ marginVertical: 16 }}
            />

            {/* Food Stories */}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
      },
    header: 
      {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 18, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: 
    {
        fontSize: 26,
        fontWeight: 'normal',
        lineHeight: 35,
        paddingTop: 3, 
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
      },
    sectionTitle: { 
        fontWeight: 'bold', 
        fontSize: 18 
    },
    reviewButton: {
        backgroundColor: 'black',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
      },
    reviewButtonText: {
        color: 'white',
        fontFamily: 'InknutAntiquaRegular',
      },
    reviewCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
      },
      profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
      },
      time: { fontSize: 12, color: 'gray' },
      reviewHeader: { fontWeight: 'bold' },
      restaurant: { color: '#C49A2C' },
      reviewText: { fontSize: 13, marginVertical: 4 },
      rating: { marginLeft: 8, fontSize: 12, color: '#C49A2C' },
      reviewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
      },
      readMore: { color: 'gray', fontSize: 12 },
      toggleContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 4,
        marginTop: 12,
        alignSelf: 'flex-start',
      },
      toggleButton: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
      activeToggle: {
        backgroundColor: 'white',
      },
      toggleText: { color: 'white', fontFamily: 'InknutAntiquaRegular' },
      activeToggleText: { color: 'black' },
});