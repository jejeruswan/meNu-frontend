import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

export default function UserProfileScreen() {
    const colorScheme = useColorScheme();
    const userName = 'Jessica'; // replace with real data later

    return (
        <ScrollView> 
            // Profile Header 
            <ThemedView>
                <Image 
                    source={{uri: 'https://placeholder.com' }} // add image source here later
                    style={styles.profileImage}
                /> 
                <View style={styles.followContainer}>
                    <ThemedText style={styles.followCount}>437</ThemedText>
                    <ThemedText>Followers</ThemedText>
                </View>
                <View style={styles.followContainer}>
                    <ThemedText style={styles.followCount}>325</ThemedText>
                    <ThemedText>Following</ThemedText>
                </View>
            </ThemedView> 

            // Dashboard
            <ThemedView style={styles.dashboard}>
                <ThemedText type="title">{userName}'s Dishboard</ThemedText>
                <View style={styles.dashboardRow}>
                    <ThemedText>Countries Visited</ThemedText>
                    <ThemedText>Top Bites</ThemedText>
                </View>
                <View style={styles.dashboardRow}>
                    <ThemedText>Flavor Profile</ThemedText>
                    <ThemedText>meNu History</ThemedText>
                 </View>
            </ThemedView>

            // Recent Reviews
            <ThemedText type="title" style={styles.sectionTitle}>Recent Reviews</ThemedText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollSection}>
                <ThemedView style={styles.card}><ThemedText>Review 1</ThemedText></ThemedView>
                <ThemedView style={styles.card}><ThemedText>Review 2</ThemedText></ThemedView>
                <ThemedView style={styles.card}><ThemedText>Review 3</ThemedText></ThemedView>
            </ScrollView>

            // Recent Recipes
            <ThemedText type="title" style={styles.sectionTitle}>Recent Recipes</ThemedText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollSection}>
                <ThemedView style={styles.card}><ThemedText>Recipe 1</ThemedText></ThemedView>
                <ThemedView style={styles.card}><ThemedText>Recipe 2</ThemedText></ThemedView>
                <ThemedView style={styles.card}><ThemedText>Recipe 3</ThemedText></ThemedView>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16, 
            marginBottom: 20,
        },
        profileImage: { 
            width: 155, 
            height: 155, 
            borderRadius: 1,
        },
        followContainer: {
            alignItems: 'center',
            marginHorizontal: 8,
        },
        followCount: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        dashboard: {
            marginBottom: 20,
        },
        dashboardRow: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginVertical: 4,
        },
        sectionTitle: {
            marginTop: 20, 
            marginBottom: 10,
        },
        scrollSection: {
            flexDirection: 'row'
        },
        card: {
            width: 120,
            height: 120,
            marginRight: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
    }

);
