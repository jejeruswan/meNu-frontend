import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';

import React, {useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import GradientSlider from './GradientSlider'; // Adjust path as needed

export default function FlavorProfile() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({}, 'background');
    const primaryTextColor = useThemeColor({}, 'textPrimary');
    const router = useRouter();
    const userName = 'Jessica'; // replace with real data later
    const [isEditing, setIsEditing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    // State for sliders
    const [sliders, setSliders] = useState({
      asian: 0.3,
      western: 0.5,
      sweet: 0.6,
      savory: 0.4,
      spice: 0.2,
    });
  
    // State for mood cravings
    const [mood, setMood] = useState({
      sad: "warm soto soup feels like a hug",
      happy: "matcha strawberry latte FTW :D",
      stressed: "a classic tiramisu helps me get through the day",
    });
  
    // Temp states while editing
    const [tempSliders, setTempSliders] = useState({ ...sliders });
    const [tempMood, setTempMood] = useState({ ...mood });
  
    const handleSave = () => {
      setSliders(tempSliders);
      setMood(tempMood);
      setIsEditing(false);
      setModalVisible(false);
    };
  
    const handleCancel = () => {
      setModalVisible(false);
    };

    const handleClose = () => {
        setTempSliders(sliders);
        setTempMood(mood);
        setIsEditing(false);
        setModalVisible(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={[{ flex: 1 }, isEditing && styles.blurredBackground]}>
                {/* Menu and Profile Picture Container */}
                <View style={{ alignItems: 'center', position: 'relative', marginTop: 20 }}>
                    {/* meNu Title */}
                    <View style={[styles.header, { paddingBottom: 5, paddingTop: 10 }]}>
                        <ThemedText style={[styles.headerTitle, { color: primaryTextColor, fontFamily: 'InknutAntiquaRegular', lineHeight: 30 }]}>
                            meNu
                        </ThemedText>
                    </View>

                    {/* Profile Picture positioned close to menu */}
                    <Image
                        source={require('@/assets/images/stock-profile-photo.jpg')}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 3,
                            borderColor: 'black',
                            position: 'absolute',
                            top: 60, // adjust this to bring picture closer/further
                            left: '50%',
                            marginLeft: -75, // half the width to center
                        }}
                    />

                    {/* Spacer to keep ScrollView layout intact */}
                    <View style={{ height: 160 }} /> 
                    {/* 150 for image + small buffer so content below scrolls normally */}

                    {/* My Flavor Profile Title */}
                    <ThemedText
                        style={{
                            color: primaryTextColor,
                            fontFamily: 'InknutAntiquaRegular',
                            fontSize: 20,
                            textAlign: 'center',
                            marginTop: 10,
                        }}
                    >
                        My Flavor Profile
                    </ThemedText>


                </View>
                <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.editBtn}>
                <Text style={styles.editBtnText}>Edit</Text>
                </TouchableOpacity>
                
                <ScrollView style={[styles.container, { backgroundColor }]} contentContainerStyle={{ paddingBottom: 20 }}>

                    <View style={styles.yellowcontainer}>
                        {/* erm hard part */}

                        {/* Taste Palette */}
                        <Text style={styles.heading}>Taste Palette</Text>
                        {Object.keys(sliders).map((key) => (
                            <View key={key} style={styles.blackBox}>
                            <Text style={styles.label}>{key}</Text>
                            <GradientSlider
                                style={{ width: "100%" }}
                                value={isEditing ? tempSliders[key] : sliders[key]}
                                onValueChange={(val) =>
                                    setTempSliders({ ...tempSliders, [key]: val })
                                }
                                disabled={!isEditing}
                            />
                            </View>
                        ))}

                        {/* Mood Cravings */}
                        <Text style={styles.heading}>Mood Cravings</Text>
                        {Object.keys(mood).map((key) => (
                            <View key={key} style={styles.blackBox}>
                            <Text style={styles.label}>When I'm {key}...</Text>
                            <TextInput
                                style={styles.input}
                                value={isEditing ? tempMood[key] : mood[key]}
                                onChangeText={(text) =>
                                setTempMood({ ...tempMood, [key]: text })
                                }
                                editable={isEditing}
                                multiline
                            />
                            </View>
                        ))}

                    </View>

                </ScrollView>
            </View>
            
            {/* Full-Screen Edit Overlay */}
            {isEditing && (
                <View style={styles.fullScreenEditOverlay}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                        {/* Full-screen yellow container */}
                        <View style={styles.fullScreenYellowContainer}>
                            {/* Your editing content here - copy from your existing yellowcontainer */}
                            {/* Close button */}
                            <TouchableOpacity onPress={handleClose} style={styles.crossButton}>
                                <Image 
                                    source={require('../assets/images/cross-button.png')}
                                    style={{ width: 33, height: 33 }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            {/* Taste Palette */}
                            <Text style={styles.heading}>Taste Palette</Text>
                                {Object.keys(sliders).map((key) => (
                                    <View key={key} style={styles.blackBox}>
                                    <Text style={styles.label}>{key}</Text>
                                    <GradientSlider
                                        style={{ width: "100%" }}
                                        value={isEditing ? tempSliders[key] : sliders[key]}
                                        onValueChange={(val) =>
                                            setTempSliders({ ...tempSliders, [key]: val })
                                        }
                                        disabled={!isEditing}
                                    />
                                    </View>
                                ))}

                                {/* Mood Cravings */}
                                <Text style={styles.heading}>Mood Cravings</Text>
                                {Object.keys(mood).map((key) => (
                                    <View key={key} style={styles.blackBox}>
                                    <Text style={styles.label}>When I'm {key}...</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={tempMood[key]}
                                        onChangeText={(text) =>
                                        setTempMood({ ...tempMood, [key]: text })
                                        }
                                        editable={true}
                                        multiline
                                    />
                                    </View>
                                ))}

                                {/* Show confirm modal only when editing */}
                                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.saveBtn}>
                                <Text style={styles.submittext}>Save Changes</Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}

            {/* Confirmation Modal */}
            <Modal transparent={true} visible={modalVisible} animationType="slide">
                <View style={styles.modalBg}>
                    <View style={styles.modalBox}>
                        <Text>Confirm changes?</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", width: "100%" }}>
                            <View style={{ flex: 1, marginRight: 10 }}>
                                <Button title="Cancel" onPress={handleCancel} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button title="Confirm" onPress={handleSave} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: { 
        paddingTop: 0 
    },
    yellowcontainer: { 
        marginHorizontal: 15,
        backgroundColor: "#fcd34d", 
        padding: 20,
        borderRadius: 16,
    },
    editBtn: {
        alignSelf: "flex-end",
        marginHorizontal: 15, // same as yellowcontainer
        padding: 8,
        backgroundColor: "transparent",
    },
    editBtnText: {
        color: "white",
        fontFamily: 'InknutAntiquaRegular',
        fontSize: 12,
    },
    heading: {
        fontSize: 18, 
        fontFamily: 'InknutAntiquaRegular',
        fontWeight: "bold", 
        marginVertical: 10,
    },
    blackBox: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
    },
    label: { 
        color: "white", 
        marginBottom: 5,
        fontSize: 15,
        fontFamily: 'InknutAntiquaRegular',
        fontWeight: "semibold",
    },
    input: { 
        color: "white", 
        fontSize: 14
    },
    saveBtn: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    modalBg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalBox: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        width: "85%",
        alignItems: "center",
    },
    header: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'normal',
        paddingTop: 0, 
        marginBottom: 0
    },
    sectionHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
    },
    profileImage: { 
        width: 150, 
        height: 150, 
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'center',
    },
    blurredBackground: {
        opacity: 0.3,
    },
    fullScreenEditOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
    },
    fullScreenYellowContainer: {
        margin: 20,
        marginTop: 80, // space for close button
        backgroundColor: "#fcd34d", 
        padding: 25,
        borderRadius: 20,
        minHeight: '80%',
    },
    crossButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 33,
        height: 33,
    },
    submittext: {
        color: 'black',
        fontFamily: 'System', 
        fontSize: 16,
        fontWeight: '550',
    },
});
