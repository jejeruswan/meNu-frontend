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


const { width } = Dimensions.get('window');


// Mock Data
const topRecipes = [
    { 
        id: '1', 
        name: 'Spaghetti Carbonara', 
        image: require('@/assets/images/mock-food-pics/carbonara.jpg'), 
        duration: '39 mins',
        reviews: 120, 
        rating: 4.1, 
        description: 'The carbonara is made with pancetta or bacon, eggs, Parmesan, a little olive oil, salt ...' 
    },
    { 
        id: '2', 
        name: 'Chicken Tikka', 
        image: require('@/assets/images/mock-food-pics/chicken-tikka-masala.jpeg'), 
        duration: '1 hr',
        reviews: 1049, 
        rating: 4.8,
        description: 'This tikka masala sauce is bright orange and richly flavored with onion, garlic, spices, tomato sauce, and cream, cooked with tender chicken ...'
    },
];

const exploreRecipes = [
    { 
        id: '3', 
        name: 'Oreo Crepe', 
        image: require('@/assets/images/mock-food-pics/oreo-crepe.jpg'), 
        duration: '1 hr 10 mins',
        likes: 78, 
        rating: 3.7,
        cuisine: 'Other' 
    },
    {
        id: '4', 
        name: 'Truffle Pizza', 
        image: require('@/assets/images/mock-food-pics/truffle-pizza.webp'), 
        duration: '50 mins',
        likes: 9018, 
        rating: 4.9,
        cuisine: 'Italian' 
    },
];

export default function RecipePage() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');

    const [searchQuery, setSearchQuery] = useState('');

    const filteredRecipes = exploreRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
    <ScrollView style={styles.container}>
        {/* meNu Title */}
        <View style={styles.header}>
            <ThemedText style={[styles.headerTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaRegular' }]}>
                meNu
            </ThemedText>
        </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInner}>
            <Ionicons name="search" size={20} color="#333" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="what do you want to cook today?"
                placeholderTextColor="#888"
                />
        </View>
    </View>

      {/* Top Recipes */}
      <ThemedText style={styles.sectionTitle}>Your Top Recipes</ThemedText>
      <FlatList
        horizontal
        data={topRecipes}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recipeCard}>
            <Image source={item.image} style={styles.topRecipeImage} />
            <ThemedText style={styles.topRecipeName}>{item.name}</ThemedText>
            <View style={styles.recipeMeta}>
                <ThemedText>⭐ {item.rating}</ThemedText>
                <ThemedText>⏱ {item.duration}</ThemedText>
                <ThemedText style={styles.likes}>❤️ {item.likes}</ThemedText>
            </View>
            <ThemedText style={styles.recipeDesc} numberOfLines={2}>{item.description}</ThemedText>
          </TouchableOpacity>
        )}
        style={{ marginBottom: 16 }}
      />

      {/* Explore Recipes Grid */}
      <ThemedText style={styles.sectionTitle}>Explore</ThemedText>
      <View style={styles.grid}>
        {filteredRecipes.map(recipe => (
          <TouchableOpacity key={recipe.id} style={styles.recipeCard}>
            <Image source={recipe.image} style={styles.recipeImage} />
            <View style={styles.recipeInfo}>
              <ThemedText style={styles.recipeName}>{recipe.name}</ThemedText>
              <ThemedText style={styles.recipeDesc} numberOfLines={2}>{recipe.description}</ThemedText>
              <View style={styles.recipeMeta}>
                <ThemedText>⭐ {recipe.rating.toFixed(1)}</ThemedText>
                <ThemedText>⏱ {recipe.duration}</ThemedText>
                <ThemedText>❤️ {recipe.likes}</ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE677',  
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 16,
      },
      searchInner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',   
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 6,
        width: '60%',
      },
      searchIcon: {
        marginRight: 8,
      },
      searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
      },
      sectionTitle: {
        fontFamily: 'InknutAntiquaBold',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
      },
      topRecipeImage: {
        width: 120,
        height: 120,
        borderRadius: 12,
      },
      topRecipeName: {
        fontFamily: 'InknutAntiquaBold',
        marginTop: 4,
        fontWeight: '600',
      },
      likes: {
        fontSize: 12,
        color: '#888',
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      recipeCard: {
        width: (width - 48) / 2, // 2 columns
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      recipeImage: {
        width: '100%',
        height: 120,
      },
      recipeInfo: {
        padding: 8,
      },
      recipeName: {
        fontFamily: 'InknutAntiquaRegular',
        fontWeight: '600',
      },
      recipeDesc: {
        fontFamily: 'InknutAntiquaRegular',
        fontSize: 10,
        color: '#7E7E7E',
        marginVertical: 4,
      },
      recipeMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
      },
});