import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  
  const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  const dateStr = `${meses[time.getMonth()]} ${time.getDate().toString().padStart(2, '0')}`;

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.cityText}>RECIFE, PE</Text>
      
      <View style={styles.weatherContainer}>
        <MaterialIcons name="ac-unit" size={14} color="#94A3B8" />
        <Text style={styles.dateText}> 28°C | {dateStr}</Text>
      </View>

      <Text style={styles.timeText}>{hours}:{minutes}</Text>
      
      <View style={styles.footerContainer}>
        <MaterialIcons name="event" size={14} color="#94A3B8" />
        <Text style={styles.footerText}> Dev Mode</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clockContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#050B14', 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    borderWidth: 4,
    borderColor: '#1E293B',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  cityText: { color: '#94A3B8', fontSize: 12, fontWeight: 'bold', letterSpacing: 2, marginBottom: 8 },
  weatherContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  dateText: { color: '#94A3B8', fontSize: 12 },
  timeText: { color: '#F8FAFC', fontSize: 56, fontWeight: '200', letterSpacing: 2 },
  footerContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  footerText: { color: '#94A3B8', fontSize: 12 }
});