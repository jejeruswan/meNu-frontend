import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';

interface GradientSliderProps {
  value: number;
  onValueChange: (value: number) => void;
  disabled?: boolean;
  style?: any;
}

const GradientSlider: React.FC<GradientSliderProps> = ({ 
  value, 
  onValueChange, 
  disabled = false, 
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Labels */}
      <View style={styles.labelsContainer}>
        <Text style={styles.leftLabel}>love it!</Text>
        <Text style={styles.rightLabel}>not a fan</Text>
      </View>
      
      {/* Slider and Gradient Container */}
      <View style={styles.sliderContainer}>
        {/* Gradient Background positioned absolutely */}
        <View style={styles.gradientWrapper}>
          <LinearGradient
            colors={['#22c55e', '#eab308', '#ef4444']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </View>
        
        {/* Slider positioned absolutely */}
        <Slider
          style={styles.slider}
          value={value}
          onValueChange={onValueChange}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbStyle={styles.thumb}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 0,
    paddingHorizontal: 5,
  },
  leftLabel: {
    color: '#22c55e', 
    fontSize: 12, 
    fontWeight: 'bold',
  },
  rightLabel: {
    color: '#ef4444', 
    fontSize: 12, 
    fontWeight: 'bold',
  },
  sliderContainer: {
    height: 40,
    justifyContent: 'center',
    position: 'relative',
  },
  gradientWrapper: {
    position: 'absolute',
    left: 10, // Account for thumb radius
    right: 10, // Account for thumb radius
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    top: '50%',
    marginTop: -3, // Half of gradient height to center it
  },
  gradient: {
    flex: 1,
  },
  slider: {
    width: "100%", 
    height: 40,
    position: 'absolute',
    top: 0,
  },
  thumb: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#333',
    width: 18,
    height: 18,
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default GradientSlider;