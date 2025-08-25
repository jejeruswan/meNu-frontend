import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import PublishRecipe from '../screens/EatIn/PublishRecipe';
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

export default function WriteRecipe() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);
    const [servings, setServings] = useState('');
    const [duration, setDuration] = useState('');

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const addInstruction = () => {
        setInstructions([...instructions, '']);
    };

    const updateIngredient = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const updateInstruction = (index, value) => {
        const newInstructions = [...instructions];
        newInstructions[index] = value;
        setInstructions(newInstructions);
    };

    const handleSaveAsDraft = () => {
        // Handle save as draft logic
        console.log('Save as draft');
    };

    const handlePublish = () => {
        // Handle publish logic
        console.log('Publish recipe');
        setIsModalVisible(true)
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <ThemedText style={[styles.headerTitle, { fontFamily: 'InknutAntiquaRegular' }]}>
                    meNu.
                </ThemedText>
            </View>

            {/* Main Title */}
            <View style={styles.titleSection}>
                <ThemedText style={styles.mainTitle}>
                    Let's Publish a New Recipe!
                </ThemedText>
            </View>

            {/* Form Container */}
            <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
                {/* Title Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Title</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="type here..."
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Description Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Description</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="type here..."
                        value={description}
                        onChangeText={setDescription}
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Ingredients Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Ingredients</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <View style={styles.inputWithButton}>
                        <TextInput
                            style={styles.inputWithAdd}
                            placeholder="type here..."
                            value={ingredients[ingredients.length - 1]}
                            onChangeText={(text) => updateIngredient(ingredients.length - 1, text)}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Instructions Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Instructions</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <View style={styles.inputWithButton}>
                        <TextInput
                            style={styles.inputWithAdd}
                            placeholder="type here..."
                            value={instructions[instructions.length - 1]}
                            onChangeText={(text) => updateInstruction(instructions.length - 1, text)}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addInstruction}>
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Servings Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Servings</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="type here..."
                        value={servings}
                        onChangeText={setServings}
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Duration Field */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <ThemedText style={styles.label}>Duration</ThemedText>
                        <ThemedText style={styles.required}>*</ThemedText>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="type here..."
                        value={duration}
                        onChangeText={setDuration}
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Image Field */}
                <View style={styles.fieldContainer}>
                    <ThemedText style={styles.label}>Image</ThemedText>
                    <TouchableOpacity style={styles.attachButton}>
                        <Ionicons name="attach" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Video Field */}
                <View style={styles.fieldContainer}>
                    <ThemedText style={styles.label}>Video</ThemedText>
                    <TouchableOpacity style={styles.attachButton}>
                        <Ionicons name="attach" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.draftButton} onPress={handleSaveAsDraft}>
                        <ThemedText style={styles.draftButtonText}>Save as Draft</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
                        <ThemedText style={styles.publishButtonText}>Publish</ThemedText>
                    </TouchableOpacity>
                </View>
                
                {/* Writing Review Modal */}
                <Modal
                    transparent
                    animationType="fade"
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <BlurView intensity={50} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <PublishRecipe onClose={() => setIsModalVisible(false)} />
                    </BlurView>
                </Modal>
            </ScrollView>
        </View>      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
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
        color: 'black',
    },
    titleSection: {
        paddingHorizontal: 4,
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 23,
        fontFamily: 'InknutAntiquaBold',
        color: 'black',
        textAlign: 'left',
    },
    formContainer: {
        backgroundColor: '#F5D951',
        borderRadius: 20,
        padding: 20,
        marginBottom: 30,
        flex: 1, // Add max height for scrolling
    },
    fieldContainer: {
        marginBottom: 20,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginRight: 4,
    },
    required: {
        fontSize: 18,
        color: '#DC2626',
        fontWeight: '600',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        color: 'black',
    },
    inputWithButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWithAdd: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        color: 'black',
        flex: 1,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: 'black',
        borderRadius: 25,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    attachButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    draftButton: {
        backgroundColor: 'black',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flex: 0.48,
        alignItems: 'center',
    },
    publishButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flex: 0.48,
        alignItems: 'center',
    },
    draftButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    publishButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});
