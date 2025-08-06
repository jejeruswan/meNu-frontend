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


export default function UserProfileScreen() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');

    const userName = 'Jessica'; // replace with real data later

    return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
        {/* meNu Title */}
         <View style={styles.header}>
                <ThemedText style={[styles.headerTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaRegular' }]}>
                  meNu
                </ThemedText>
              </View>

        {/* Profile Header */}
        <View style={styles.sectionHeader}>
          <Image source={require('@/assets/images/stock-profile-photo.jpg')} style={styles.profileImage} />
          <TouchableOpacity style={styles.addButton}>
            <ThemedText>+</ThemedText>
          </TouchableOpacity>
          <ThemedText style={{ color: '#575757'}}>Edit</ThemedText>
        </View>
      
        {/* Followers / Following */}
        <View style={styles.statsBar}>
          <View>
            <ThemedText style={styles.followCount}>325</ThemedText>
            <ThemedText style={ { color: primaryTextColor, fontFamily: 'InknutAntiquaBold' } }>Following</ThemedText>
          </View>
          <View>
            <ThemedText style={styles.followCount}>437</ThemedText>
            <ThemedText style={ { color: primaryTextColor, fontFamily: 'InknutAntiquaBold' } }>Followers</ThemedText>
          </View>
        </View>
      
        {/* Dashboard */}
        <View style={styles.dashboard}>
          <ThemedText style={ { color: 'white', fontFamily: 'InknutAntiquaBold' } }>{userName}'s Dashboard</ThemedText>
          <View style={styles.dashboardRow}>
            <View style={styles.dashboardCard}>
              <ThemedText style={styles.dashboardText}>48/195 countries</ThemedText>
            </View>
            <View style={styles.dashboardCard}>
              <ThemedText style={styles.dashboardText}>⭐ Top Bites</ThemedText>
            </View>
          </View>
          <View style={styles.dashboardRow}>
            <View style={styles.dashboardCard}>
              <ThemedText style={styles.dashboardText}>Flavor Profile</ThemedText>
            </View>
            <View style={styles.dashboardCard}>
              <ThemedText style={styles.dashboardText}>meNu History</ThemedText>
            </View>
          </View>
        </View>
      
        {/* Recent Reviews Section */}
        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Your Recent Reviews</ThemedText>
          <TouchableOpacity><ThemedText style={{ color: '#575757'}}>View all</ThemedText></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.reviewCard}>
            <ThemedText>⭐ ⭐ ⭐</ThemedText>
            <ThemedText style={styles.reviewTitle}>PANDA EXPRESS</ThemedText>
            <ThemedText style={styles.reviewText}>it’s okay... i’ve had better chinese food</ThemedText>
          </View>
          <View style={styles.reviewCard}>
            <ThemedText>⭐ ⭐ ⭐ ⭐</ThemedText>
            <ThemedText style={styles.reviewTitle}>IHOP</ThemedText>
            <ThemedText style={styles.reviewText}>this cured my hangover!!</ThemedText>
          </View>
        </ScrollView>

      {/* Recent Recipes Section */}
      <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Your Recent Recipes</ThemedText>
          <TouchableOpacity><ThemedText style={{ color: '#575757'}}>View all</ThemedText></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.reviewCard}>
            <ThemedText>⭐ ⭐ ⭐</ThemedText>
            <ThemedText style={styles.reviewTitle}>PANDA EXPRESS</ThemedText>
            <ThemedText style={styles.reviewText}>it’s okay... i’ve had better chinese food</ThemedText>
          </View>
          <View style={styles.reviewCard}>
            <ThemedText>⭐ ⭐ ⭐ ⭐</ThemedText>
            <ThemedText style={styles.reviewTitle}>IHOP</ThemedText>
            <ThemedText style={styles.reviewText}>this cured my hangover!!</ThemedText>
          </View>
        </ScrollView>
      </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        container: { flex: 1 },
        header: {
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 18, 
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerTitle: {
            fontSize: 26,
            fontWeight: 'normal',
            lineHeight: 35,
            paddingTop: 3, 
        },
        profileImage: { 
            width: 150, 
            height: 150, 
            borderRadius: 100,
            borderWidth: 3,
            borderColor: 'black',
            alignSelf: 'center',
        },
        addButton: { 
          position: 'absolute', 
          bottom: 0, 
          right: 0, 
          backgroundColor: '#FFE677', 
          borderRadius: 12, 
          padding: 4 
        },
        statsBar: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#FFD84C',
          borderRadius: 16,
          margin: 16,
          paddingVertical: 12,
        },
        followCount: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        dashboard: {
          backgroundColor: 'black',
          borderRadius: 20,
          padding: 16,
          marginHorizontal: 16,
        },
        dashboardRow: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginTop: 12 },
        dashboardText: {
            fontFamily: 'InknutAntiquaBold',
            fontSize: 10,
            color: 'black',
        },
        dashboardCard: {
          backgroundColor: '#fff',
          borderRadius: 12,
          width: 140,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        reviewCard: {
          backgroundColor: '#fff',
          borderRadius: 16,
          width: 160,
          padding: 12,
          marginRight: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        reviewTitle: {
            fontFamily: 'InknutAntiquaBold',
            fontSize: 12
        },
        reviewText: {
            fontFamily: 'InknutAntiquaRegular',
            fontSize: 10, 
        },
        sectionHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginTop: 20,
        },
        sectionTitle: { fontWeight: 'bold', fontSize: 18 },     
    }
);
