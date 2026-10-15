import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

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
    const url = "https://raw.githubusercontent.com/Arthurms-dev/portfolio-expo/master/assets/images/Curriculo%20-%20ARTHUR%20VIN%C3%8DCIUS%20MOREIRA%20DA%20SILVA%20(2026-PDF).pdf";
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

        <View style={styles.msSection}>
          <View style={styles.msHeader}>
            <MaterialIcons name="health-and-safety" size={28} color="#38BDF8" />
            <Text style={styles.msTitle}>Ministério da Saúde</Text>
          </View>
          <Text style={styles.msSubtitle}>Transformação Digital e Operacional</Text>

          <Text style={styles.msDescription}>
            Atuo como o principal ponto de inovação do setor, focado em encontrar soluções tecnológicas para reduzir custos operacionais e otimizar o tempo das equipes.
          </Text>

          <View style={styles.msGrid}>
            <View style={styles.msCard}>
              <MaterialIcons name="memory" size={24} color="#0EA5E9" style={styles.msCardIcon} />
              <Text style={styles.msCardTitle}>Inovação & IA</Text>
              <Text style={styles.msCardText}>Implementação de agentes inteligentes, automações e IA aplicada para reduzir drasticamente o tempo de execução de tarefas repetitivas.</Text>
            </View>

            <View style={styles.msCard}>
              <MaterialIcons name="dashboard" size={24} color="#0EA5E9" style={styles.msCardIcon} />
              <Text style={styles.msCardTitle}>Fullstack & BI</Text>
              <Text style={styles.msCardText}>Desenvolvimento de sistemas e dashboards gerenciais em Power BI, com projetos técnicos de gestão em saúde reconhecidos em congressos (como o CPIIS).</Text>
            </View>

            <View style={styles.msCard}>
              <MaterialIcons name="account-balance" size={24} color="#0EA5E9" style={styles.msCardIcon} />
              <Text style={styles.msCardTitle}>Gestão de Convênios</Text>
              <Text style={styles.msCardText}>Acompanhamento administrativo e fiscalização de instrumentos e prestação de contas, dominando processos no SEI, BGSICONV e TransfereGov.</Text>
            </View>

            <View style={styles.msCard}>
              <MaterialIcons name="support-agent" size={24} color="#0EA5E9" style={styles.msCardIcon} />
              <Text style={styles.msCardTitle}>Suporte Integrado</Text>
              <Text style={styles.msCardText}>Resolução ágil de problemas cotidianos de infraestrutura, desde hardwares a aplicativos, garantindo o funcionamento contínuo do setor.</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

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

        <View style={styles.divider} />

        {/* SEÇÃO: CONTATO (FINAL) */}
        <View style={styles.contactSection}>
          <Text style={styles.contactHugeTitle}>Quer conversar, tem uma vaga, ou um projeto em mente?</Text>
          <Text style={styles.contactSubtitle}>
            O caminho mais direto é o e-mail! Também estou pelo LinkedIn e no GitHub.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.contactLabel}>E-MAIL</Text>
          <View style={styles.emailRow}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL('mailto:arthurms707@gmail.com')}>
              <Text style={styles.emailText}>arthurms707@gmail.com</Text>
            </TouchableOpacity>
            
            <View style={styles.emailActions}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => Alert.alert("E-mail copiado!", "arthurms707@gmail.com foi copiado para a área de transferência.")}
              >
                <MaterialIcons name="content-copy" size={20} color="#F8FAFC" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => Linking.openURL('mailto:arthurms707@gmail.com')}
              >
                <MaterialIcons name="send" size={20} color="#F8FAFC" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.socialGrid}>
            <TouchableOpacity 
              style={styles.socialCard} 
              activeOpacity={0.7}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/arthur-vin%C3%ADcius-815080427/')}
            >
              <FontAwesome name="linkedin-square" size={24} color="#F8FAFC" style={styles.socialIcon} />
              <View>
                <Text style={styles.socialCardLabel}>LINKEDIN</Text>
                <Text style={styles.socialCardValue}>in/arthur-vinícius</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.socialCard} 
              activeOpacity={0.7}
              onPress={() => Linking.openURL('https://github.com/Arthurms-dev')}
            >
              <FontAwesome name="github" size={24} color="#F8FAFC" style={styles.socialIcon} />
              <View>
                <Text style={styles.socialCardLabel}>GITHUB</Text>
                <Text style={styles.socialCardValue}>Arthurms-dev</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.socialCardWide} 
              activeOpacity={0.7}
              onPress={() => Linking.openURL('tel:+5581999944106')}
            >
              <MaterialIcons name="smartphone" size={24} color="#F8FAFC" style={styles.socialIcon} />
              <View>
                <Text style={styles.socialCardLabel}>TELEFONE</Text>
                <Text style={styles.socialCardValue}>+55 81 99994-4106</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 60 }} />

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

  msSection: { marginTop: 10 },
  msHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  msTitle: { color: '#F8FAFC', fontSize: 26, fontWeight: '900', letterSpacing: -0.5, marginLeft: 10 },
  msSubtitle: { color: '#94A3B8', fontSize: 14, fontWeight: 'bold', letterSpacing: 1, marginBottom: 16 },
  msDescription: { color: '#cbd5e1', fontSize: 15, lineHeight: 24, marginBottom: 24, textAlign: 'justify' },
  
  msGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 },
  msCard: { 
    width: '47%',
    backgroundColor: 'rgba(30, 41, 59, 0.4)', 
    borderWidth: 1, 
    borderColor: 'rgba(56, 189, 248, 0.2)',
    borderRadius: 12, 
    padding: 16 
  },
  msCardIcon: { marginBottom: 12 },
  msCardTitle: { color: '#F8FAFC', fontSize: 15, fontWeight: 'bold', marginBottom: 8 },
  msCardText: { color: '#94A3B8', fontSize: 13, lineHeight: 20 },

  contactSection: { marginTop: 20 },
  contactHugeTitle: { color: '#F8FAFC', fontSize: 38, fontWeight: '900', letterSpacing: -1.5, lineHeight: 44, marginBottom: 16 },
  contactSubtitle: { color: '#94A3B8', fontSize: 16, lineHeight: 26 },
  
  contactLabel: { color: '#94A3B8', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.5, marginBottom: 12 },
  emailRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 },
  emailText: { color: '#F8FAFC', fontSize: 24, fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: '#38BDF8' },
  
  emailActions: { flexDirection: 'row', gap: 12 },
  actionButton: { 
    borderWidth: 1, 
    borderColor: '#334155', 
    padding: 10, 
    borderRadius: 8, 
    backgroundColor: 'rgba(30, 41, 59, 0.5)' 
  },
  
  socialGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  socialCard: { 
    width: '48%',
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#334155', 
    borderRadius: 8, 
    padding: 14,
    backgroundColor: 'rgba(30, 41, 59, 0.3)'
  },
  socialCardWide: { 
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#334155', 
    borderRadius: 8, 
    padding: 14,
    backgroundColor: 'rgba(30, 41, 59, 0.3)'
  },
  socialIcon: { marginRight: 12 },
  socialCardLabel: { color: '#94A3B8', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 4 },
  socialCardValue: { color: '#F8FAFC', fontSize: 14, fontWeight: '600' }
});