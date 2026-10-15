import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Alert } from 'react-native';

export default function Profissional() {
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
        
        <Text style={styles.pageTitle}>Experiência Profissional</Text>

        <View style={styles.chartSection}>
          <View style={styles.chartContainer}>
            <View style={styles.barCol}>
              <View style={styles.barLabelContainer}>
                <Text style={styles.barLabelTitle}>Aprendiz</Text>
                <Text style={styles.barLabelDate}>jun 2025</Text>
              </View>
              <View style={[styles.bar, { height: 20, backgroundColor: '#1E293B' }]} />
            </View>

            <View style={styles.barCol}>
              <View style={styles.barLabelContainer}>
                <Text style={styles.barLabelTitle}>Assistente</Text>
                <Text style={styles.barLabelDate}>dez 2025</Text>
              </View>
              <View style={[styles.bar, { height: 40, backgroundColor: '#1E293B' }]} />
            </View>

            <View style={styles.barCol}>
              <View style={styles.barLabelContainer}>
                <Text style={[styles.barLabelTitle, { color: '#38BDF8' }]}>Estagiário TI</Text>
                <Text style={styles.barLabelDate}>mar 2026</Text>
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
              <Text style={styles.companyName}>Min. da Saúde</Text>
              
              <View style={styles.roleRow}>
                <Text style={styles.roleTitle}>Estagiário de TI</Text>
                <Text style={styles.roleDate}>mar 2026 → atual</Text>
              </View>

              <Text style={styles.descriptionText}>
                Atuação no desenvolvimento de sistemas fullstack e dashboards avançados, integrando inteligência artificial para otimização do sistema administrativo da Superintendência Estadual em Pernambuco.
              </Text>

              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>■</Text>
                <Text style={styles.bulletText}>Desenvolvimento e manutenção de aplicações utilizando React, Node.js e Tailwind CSS.</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>■</Text>
                <Text style={styles.bulletText}>Pesquisas aplicadas sobre IA para resolução de problemas reais do ministério.</Text>
              </View>
            </View>
          </View>

          <View style={styles.parallelTrajectory}>
            <Text style={styles.trajectoryLabel}>EM PARALELO</Text>
            <Text style={styles.companyName}>Porto Digital</Text>
            
            <View style={styles.roleRow}>
              <Text style={styles.roleTitle}>Residente em Tecnologia</Text>
              <Text style={styles.roleDate}>jul 2026 → atual</Text>
            </View>

            <Text style={styles.descriptionText}>
              Alocado em um squad multidisciplinar para resolução de desafios práticos propostos pela indústria no maior parque tecnológico aberto e urbano do Brasil.
            </Text>
          </View>

        </View>

        <View style={styles.pastExperienceSection}>
           <Text style={styles.trajectoryLabel}>EXPERIÊNCIAS ANTERIORES</Text>
           <View style={styles.pastItem}>
             <Text style={styles.pastRole}>Assistente de Departamento Pessoal</Text>
             <Text style={styles.pastCompany}>Grupo GPS (dez 2025 - mar 2026)</Text>
           </View>
           <View style={styles.pastItem}>
             <Text style={styles.pastRole}>Jovem Aprendiz de Assistente Administrativo</Text>
             <Text style={styles.pastCompany}>Servis Segurança (jun 2025 - dez 2025)</Text>
           </View>
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