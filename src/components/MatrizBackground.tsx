import React, { useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');
const COLUMN_WIDTH = 25; 
const COLUMN_COUNT = Math.floor(width / COLUMN_WIDTH);

const MatrixColumn = ({ delay }: { delay: number }) => {
  const translateY = useRef(new Animated.Value(-height)).current;
  
  const chars = useMemo(() => {
    const charset = "010101<>{}[];/=*+-";
    let result = '';
    for (let i = 0; i < 40; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length)) + '\n';
    }
    return result;
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: height,
          duration: 3000 + Math.random() * 5000,
          delay: delay,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -height, 
          duration: 0,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY }], width: COLUMN_WIDTH }}>
      <Text style={styles.codeText}>{chars}</Text>
    </Animated.View>
  );
};

export default function MatrixBackground() {
  return (
    <View style={styles.absoluteFill}>
      {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
        <MatrixColumn key={i} delay={Math.random() * 4000} /> 
      ))}
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#0F172A',
    flexDirection: 'row',
    overflow: 'hidden',
    zIndex: -1, 
  },
  codeText: {
    color: '#0EA5E9', 
    opacity: 0.35, 
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 23, 42, 0.7)', 
  }
});