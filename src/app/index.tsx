import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.spring(slideAnim, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true })
      ]).start();
    }, 500);
  }, []);

 const handleBaixarCurriculo = async () => {
    const url = "https://drive.google.com/file/d/1ZquWLY6dprRXGXwsaTU_rLAURcQ_TUnT/view?usp=sharing";
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "O dispositivo não suporta a abertura deste link.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao tentar abrir o link do currículo.");
    }
  };

  const handlePreVisualizar = async () => {
    const url = "https://drive.google.com/file/d/1ZquWLY6dprRXGXwsaTU_rLAURcQ_TUnT/view?usp=sharing"; 
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "O dispositivo não suporta a abertura deste link.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao tentar abrir o link do currículo.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        
        <Text style={styles.overline}>DESENVOLVEDOR WEB PLENO · FULL STACK</Text>
        
        <Text style={styles.hugeName}>Arthur{'\n'}Vinícius</Text>
        
        <Text style={styles.subtitleImpact}>
          Desenvolvo aplicações web completas com React, Node.js e inteligência artificial: da interface à API, das regras de negócio ao banco de dados.
        </Text>

        <Text style={styles.shortBio}>
          Hoje trabalho como Estagiário de TI no Ministério da Saúde (PE) e estudante na Universidade Católica de Pernambuco. Em paralelo, desenvolvo projetos inovadores focados na área de saúde e gestão.
        </Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleBaixarCurriculo} activeOpacity={0.8}>
            <MaterialIcons name="file-download" size={20} color="#0F172A" />
            <Text style={styles.primaryButtonText}>Baixar currículo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handlePreVisualizar} activeOpacity={0.6}>
            <MaterialIcons name="visibility" size={20} color="#94A3B8" />
            <Text style={styles.secondaryButtonText}>Pré-visualizar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.statusBar}>
          <View style={styles.statusCol}>
            <Text style={styles.statusLabel}>AGORA</Text>
            <Text style={styles.statusValue}>Estagiário de TI no Min. da Saúde</Text>
          </View>
          <View style={styles.statusCol}>
            <Text style={styles.statusLabel}>EM PARALELO</Text>
            <Text style={styles.statusValue}>Estudante na Universidade Católica de Pernambuco</Text>
          </View>
          <View style={styles.statusCol}>
            <Text style={styles.statusLabel}>STACKS PRINCIPAIS</Text>
            <Text style={styles.statusValue}>React · Node.js · PostgreSQL · Tailwind</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.photoAndQuoteContainer}>
          <View style={styles.imageWrapper}>
            <Image 
              source={require( '../../assets/images/foto-perfil2.webp' )} 
              style={styles.profileImageSquare} 
            />
          </View>
          <View style={styles.quoteWrapper}>
            <View style={styles.sobreBadge}>
              <MaterialIcons name="format-quote" size={16} color="#38BDF8" />
              <Text style={styles.sobreBadgeText}>SOBRE</Text>
            </View>
            <Text style={styles.quoteText}>
              Levo uma funcionalidade da interface até o banco de dados com excelência.
            </Text>
          </View>
        </View>

        <View style={styles.detailedTextContainer}>
          <Text style={styles.paragraph}>
            <Text> </Text>Sou desenvolvedor com foco em criar soluções que realmente resolvem problemas. Com dedicação e estudo contínuo, garanto a entrega de todas as etapas de uma funcionalidade: o layout responsivo, a validação, a segurança da API e a estruturação dos dados.
          </Text>
          
          <Text style={styles.paragraph}>
            Iniciei minha jornada técnica ainda no ensino médio integrado com Programação de Jogos Digitais e, atualmente, curso Sistemas para Internet na Universidade Católica de Pernambuco (UNICAP). 
          </Text>

          <Text style={styles.paragraph}>
            Tenho orgulho de participar de projetos como o Kora-IA e o ChronoTask, entregando inovação tecnológica para o setor de saúde pública e participando do ecossistema de inovação do Porto Digital.
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.footerGrid}>
          <View style={styles.footerBlock}>
            <Text style={styles.footerLabel}>GRADUAÇÃO</Text>
            <Text style={styles.footerValue}>Sistemas para Internet na UNICAP, com conclusão prevista para 2027.</Text>
          </View>
          <View style={styles.footerBlock}>
            <Text style={styles.footerLabel}>IDIOMAS</Text>
            <Text style={styles.footerValue}>Português nativo, Inglês técnico (Leitura e Escrita).</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.portfolioStackSection}>
          <Text style={styles.footerLabel}>COMO ESTE APP FOI CONSTRUÍDO</Text>
          <View style={styles.tagsContainer}>
            {['React Native', 'Expo Router', 'TypeScript', 'Node.js', 'Express', 'NeonDB (PostgreSQL)', 'Vercel'].map(tech => (
              <View key={tech} style={styles.techTag}>
                <Text style={styles.techTagText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 40 }} />

      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, backgroundColor: 'transparent' },
  content: { padding: 24, paddingTop: 40 },
  
  overline: { color: '#38BDF8', fontSize: 11, fontWeight: 'bold', letterSpacing: 2, marginBottom: 12 },
  hugeName: { color: '#F8FAFC', fontSize: 52, fontWeight: '900', lineHeight: 56, marginBottom: 24, letterSpacing: -1 },
  subtitleImpact: { color: '#F8FAFC', fontSize: 20, fontWeight: '600', lineHeight: 28, marginBottom: 16 },
  shortBio: { color: '#94A3B8', fontSize: 15, lineHeight: 24, marginBottom: 32 },

  buttonsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 32 },
  primaryButton: { 
    backgroundColor: '#38BDF8', flexDirection: 'row', alignItems: 'center', 
    paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 
  },
  primaryButtonText: { color: '#0F172A', fontSize: 15, fontWeight: 'bold', marginLeft: 8 },
  secondaryButton: { 
    flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 10 
  },
  secondaryButtonText: { color: '#94A3B8', fontSize: 15, fontWeight: '600', marginLeft: 8, textDecorationLine: 'underline' },

  divider: { height: 1, backgroundColor: '#1E293B', width: '100%', marginVertical: 24 },

  statusBar: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 },
  statusCol: { width: '45%', marginBottom: 10 },
  statusLabel: { color: '#94A3B8', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 6 },
  statusValue: { color: '#F8FAFC', fontSize: 13, fontWeight: '500', lineHeight: 18 },

  photoAndQuoteContainer: { flexDirection: 'column', gap: 24, marginTop: 10 },
  imageWrapper: { 
    width: 140, height: 160, 
    borderWidth: 2, borderColor: '#38BDF8', borderRadius: 8,
    padding: 4, 
  },
  profileImageSquare: { width: '100%', height: '100%', borderRadius: 4, resizeMode: 'cover' },
  quoteWrapper: { flex: 1, justifyContent: 'center' },
  sobreBadge: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  sobreBadgeText: { color: '#38BDF8', fontSize: 12, fontWeight: 'bold', letterSpacing: 2, marginLeft: 6 },
  quoteText: { color: '#F8FAFC', fontSize: 32, fontWeight: '800', lineHeight: 38, letterSpacing: -0.5 },

  detailedTextContainer: { marginTop: 32 },
  paragraph: { color: '#cbd5e1', fontSize: 16, lineHeight: 28, marginBottom: 20, textAlign: 'justify' },
  dropCap: { color: '#38BDF8', fontSize: 48, fontWeight: 'bold', lineHeight: 50 },

  footerGrid: { gap: 24 },
  footerBlock: {},
  footerLabel: { color: '#94A3B8', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.5, marginBottom: 8 },
  footerValue: { color: '#F8FAFC', fontSize: 15, fontWeight: '500', lineHeight: 22 },

  portfolioStackSection: { marginTop: 10 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  techTag: { 
    backgroundColor: 'rgba(56, 189, 248, 0.1)', 
    borderWidth: 1, 
    borderColor: 'rgba(56, 189, 248, 0.3)', 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 6 
  },
  techTagText: { color: '#38BDF8', fontSize: 13, fontWeight: '600' },
});