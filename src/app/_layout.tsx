import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import MatrixBackground from '../components/MatrizBackground';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <MatrixBackground />
      
      <Tabs
        screenOptions={{
          sceneStyle: { backgroundColor: 'transparent' }, 
          headerStyle: { backgroundColor: '#0F172A', elevation: 0 },
          headerTintColor: '#F8FAFC',
          tabBarStyle: { backgroundColor: '#1E293B', borderTopWidth: 0, paddingBottom: 5 },
          tabBarActiveTintColor: '#38BDF8',
          tabBarInactiveTintColor: '#94A3B8',
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ title: 'Sobre Mim', tabBarIcon: ({ color }) => <MaterialIcons name="person" size={26} color={color} /> }} 
        />
        <Tabs.Screen 
          name="academica" 
          options={{ title: 'Acadêmica', tabBarIcon: ({ color }) => <MaterialIcons name="school" size={26} color={color} /> }} 
        />
        <Tabs.Screen 
          name="profissional" 
          options={{ title: 'Profissional', tabBarIcon: ({ color }) => <MaterialIcons name="work" size={26} color={color} /> }} 
        />
        <Tabs.Screen 
          name="projetos" 
          options={{ title: 'Projetos', tabBarIcon: ({ color }) => <MaterialIcons name="code" size={26} color={color} /> }} 
        />
      </Tabs>
    </View>
  );
}