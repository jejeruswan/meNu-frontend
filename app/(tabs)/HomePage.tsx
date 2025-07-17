import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PromoItem {
  id: number;
  discount: string;
  image: any;
  backgroundColor: string;
}

interface FoodItem {
  id: number;
  name: string;
}

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
}

interface FoodCardProps {
  item: FoodItem;
}

const { width } = Dimensions.get('window');

const promoData: PromoItem[] = [
  {
    id: 1,
    discount: '20% off',
    image: require('@/assets/images/pizza.png'),
    backgroundColor: '#F5D76E',
  },
  {
    id: 2,
    discount: '30% off',
    image: require('@/assets/images/pizza.png'),
    backgroundColor: '#FFB6C1',
  },
  {
    id: 3,
    discount: '40% off',
    image: require('@/assets/images/pizza.png'),
    backgroundColor: '#98FB98',
  },
];

const friendsPicks: FoodItem[] = [
  { id: 1, name: "Friend's Pick 1" },
  { id: 2, name: "Friend's Pick 2" },
];

const weeklySpecials: FoodItem[] = [
  { id: 1, name: "Weekly Special 1" },
  { id: 2, name: "Weekly Special 2" },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  
  const textColor = useThemeColor({}, 'textPrimary');

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (width - 40));
    setCurrentIndex(index);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.carousel}
      >
        {promoData.map((item) => (
          <View
            key={item.id}
            style={[
              styles.carouselItem,
              { backgroundColor: item.backgroundColor }
            ]}
          >
            <View style={styles.carouselContent}>
              <View style={styles.carouselText}>
                <ThemedText style={[styles.discountText, { fontFamily: 'InknutAntiquaBold' }]}>
                  {item.discount}
                </ThemedText>
                <TouchableOpacity style={styles.morePromosButton}>
                  <ThemedText style={styles.morePromosText}>more promos</ThemedText>
                </TouchableOpacity>
              </View>
              <View style={styles.carouselImageContainer}>
                <Image
                  source={item.image}
                  style={styles.carouselImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.paginationContainer}>
        {promoData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { 
                backgroundColor: textColor,
                opacity: index === currentIndex ? 1 : 0.3 
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, showViewAll = true }) => {
  const primaryTextColor = useThemeColor({}, 'textPrimary');
  const secondaryTextColor = useThemeColor({}, 'textSecondary');
  
  return (
    <View style={styles.sectionHeader}>
      <ThemedText style={[styles.sectionTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaBold' }]}>
        {title}
      </ThemedText>
      {showViewAll && (
        <TouchableOpacity>
          <ThemedText style={[styles.viewAllText, { color: secondaryTextColor }]}>
            View all
          </ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const cardBackground = useThemeColor({}, 'cardBackground');
  const textColor = useThemeColor({}, 'textPrimary');
  
  return (
    <TouchableOpacity style={styles.foodCard}>
      <View style={[
        styles.foodCardContent,
        { backgroundColor: cardBackground }
      ]}>
        <View style={styles.foodImagePlaceholder}>
          <ThemedText style={[styles.foodItemName, { color: textColor }]}>
            {item.name}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomePage() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const primaryTextColor = useThemeColor({}, 'textPrimary');

  return (
    <ThemedView style={styles.container}>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={backgroundColor} 
      />
      
      <View style={styles.header}>
        <ThemedText style={[styles.headerTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaRegular' }]}>
          meNu
        </ThemedText>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <CarouselComponent />

        <View style={[styles.section, { marginTop: 5 }]}>
          <SectionHeader title="Your friend's picks" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {friendsPicks.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Weekly Specials" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {weeklySpecials.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  scrollView: {
    flex: 1,
  },
  carouselContainer: {
    marginVertical: 10,
  },
  carousel: {
    paddingHorizontal: 20,
  },
  carouselItem: {
    width: width - 40,
    height: 195,
    borderRadius: 20,
    marginRight: 20,
    overflow: 'hidden',
  },
  carouselContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  carouselText: {
    flex: 1.15,
    paddingRight: 10,
    paddingLeft: 5,
    justifyContent: 'center',
  },
  discountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
    flexWrap: 'wrap',
    lineHeight: 45, 
    paddingTop: 5,
  },
  morePromosButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    alignSelf: 'flex-start',
    marginTop: 4,
    minHeight: 40,
  },
  morePromosText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20, 
  },
  carouselImageContainer: {
    flex: 0.85,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  carouselImage: {
    width: 135,
    height: 135,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  section: {
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: -10,
    paddingVertical: 12, 
    minHeight: 45,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 28, 
    paddingTop: 4, 
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  horizontalScrollView: {
    paddingLeft: 20,
  },
  foodCard: {
    width: 160,
    height: 200,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  foodCardContent: {
    flex: 1,
  },
  foodImagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodItemName: {
    fontSize: 14,
    fontWeight: '500',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  bottomSpacing: {
    height: 100,
  },
});