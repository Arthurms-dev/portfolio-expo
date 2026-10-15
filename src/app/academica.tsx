import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Alert } from 'react-native';

export default function Academica() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true })
    ]).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        
        <Text style={styles.pageTitle}>Formação Acadêmica</Text>

        <View style={styles.chartSection}>
          <View style={styles.chartContainer}>
            <View style={styles.barCol}>
              <View style={styles.barLabelContainer}>
                <Text style={styles.barLabelTitle}>Ensino Médio</Text>
                <Text style={styles.barLabelDate}>2022</Text>
              </View>
              <View style={[styles.bar, { height: 30, backgroundColor: '#1E293B' }]} />
            </View>

            <View style={styles.barCol}>
              <View style={styles.barLabelContainer}>
                <Text style={[styles.barLabelTitle, { color: '#38BDF8' }]}>Graduação</Text>
                <Text style={styles.barLabelDate}>2025</Text>
              </View>
              <View style={[styles.bar, { height: 70, backgroundColor: '#38BDF8' }]} />
            </View>
          </View>
        </View>

        <View style={styles.trajectoriesContainer}>
          
          <View style={styles.mainTrajectory}>
            <View style={styles.trajectoryHeader}>
              <View style={styles.squareIcon} />
              <Text style={styles.trajectoryLabel}>TRAJETÓRIA PRINCIPAL</Text>
            </View>

            <View style={styles.mainContent}>
              <Text style={styles.companyName}>UNICAP</Text>
              
              <View style={styles.roleRow}>
                <Text style={styles.roleTitle}>Sistemas para Internet</Text>
                <Text style={styles.roleDate}>2025 → 2027 (prev.)</Text>
              </View>

              <Text style={styles.descriptionText}>
                Graduação tecnológica focada no desenvolvimento web, arquitetura de software e construção de soluções modernas para a internet. Atualmente cursando o 4º período.
              </Text>

              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>■</Text>
                <Text style={styles.bulletText}>Aprofundamento em ecossistemas JavaScript/TypeScript e metodologias ágeis.</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>■</Text>
                <Text style={styles.bulletText}>Integração prática de conceitos acadêmicos com o mercado de tecnologia.</Text>
              </View>
            </View>
          </View>

          <View style={styles.parallelTrajectory}>
            <Text style={styles.trajectoryLabel}>EM PARALELO</Text>
            <Text style={styles.companyName}>Digital Innovation One</Text>
            
            <View style={styles.roleRow}>
              <Text style={styles.roleTitle}>Bootcamp AI React Front-end</Text>
              <Text style={styles.roleDate}>Concluído</Text>
            </View>

            <Text style={styles.descriptionText}>
              Trilha intensiva de especialização focada no ecossistema React e integração com conceitos e APIs de Inteligência Artificial para enriquecer interfaces.
            </Text>
          </View>

        </View>

        <View style={styles.pastExperienceSection}>
           <Text style={styles.trajectoryLabel}>FORMAÇÃO BASE</Text>
           <View style={styles.pastItem}>
             <Text style={styles.pastRole}>Programação de Jogos Digitais</Text>
             <Text style={styles.pastCompany}>Escola Técnica Estadual Cícero Dias (2022 - 2024)</Text>
           </View>
           <Text style={[styles.descriptionText, { marginTop: 8 }]}>
             Ensino médio integrado, onde desenvolvi uma forte base em lógica de programação, estrutura de dados e fundamentos de projetos tecnológicos.
           </Text>
        </View>

        <View style={{ height: 40 }} />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { flexGrow: 1, backgroundColor: 'transparent' },
  container: { padding: 24, paddingTop: 40 },
  pageTitle: { color: '#F8FAFC', fontSize: 32, fontWeight: '900', marginBottom: 40, letterSpacing: -1 },

  chartSection: { marginBottom: 40 },
  chartContainer: { 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    borderBottomWidth: 1, 
    borderBottomColor: '#1E293B',
    paddingBottom: 0 
  },
  barCol: { flex: 1, alignItems: 'center' },
  barLabelContainer: { alignItems: 'center', marginBottom: 8 },
  barLabelTitle: { 
    color: '#F8FAFC', 
    fontSize: 12, 
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#94A3B8',
    borderStyle: 'dotted',
    paddingBottom: 2,
    marginBottom: 2
  },
  barLabelDate: { color: '#94A3B8', fontSize: 10 },
  bar: { width: '80%', borderTopLeftRadius: 2, borderTopRightRadius: 2 },

  trajectoriesContainer: { flexDirection: 'column', gap: 32 },
  
  mainTrajectory: {},
  trajectoryHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  squareIcon: { width: 10, height: 10, backgroundColor: '#38BDF8', marginRight: 8 },
  trajectoryLabel: { color: '#94A3B8', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.5 },
  
  mainContent: { 
    borderLeftWidth: 2, 
    borderLeftColor: '#38BDF8',
    paddingLeft: 20,
    marginLeft: 4
  },
  companyName: { color: '#F8FAFC', fontSize: 36, fontWeight: '900', letterSpacing: -1, marginBottom: 8 },
  roleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#1E293B', paddingBottom: 12, marginBottom: 16 },
  roleTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: 'bold' },
  roleDate: { color: '#94A3B8', fontSize: 12 },
  
  descriptionText: { color: '#cbd5e1', fontSize: 15, lineHeight: 24, marginBottom: 16, textAlign: 'justify' },
  
  bulletPoint: { flexDirection: 'row', marginBottom: 12, alignItems: 'flex-start' },
  bullet: { color: '#38BDF8', fontSize: 12, marginRight: 10, marginTop: 4 },
  bulletText: { color: '#cbd5e1', fontSize: 14, lineHeight: 22, flex: 1 },

  parallelTrajectory: {
    borderWidth: 1,
    borderColor: '#38BDF8',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 24,
    backgroundColor: 'rgba(30, 41, 59, 0.3)'
  },

  pastExperienceSection: { marginTop: 40 },
  pastItem: { marginTop: 16 },
  pastRole: { color: '#F8FAFC', fontSize: 15, fontWeight: 'bold' },
  pastCompany: { color: '#94A3B8', fontSize: 13, marginTop: 4 }
});