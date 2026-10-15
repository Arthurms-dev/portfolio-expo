import React, { useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity, Linking, ScrollView, Dimensions, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';

const { width } = Dimensions.get('window');

const PROJETOS_RICOS = [
{
id: '1',
nome: 'Dashboard Sismob Monitoramento de Obras - Novo PAC',
subtitulo: 'Sistema de monitoramento de obras do Novo PAC para o Ministério da Saúde (PE).',
descricao: 'Desenvolvido para o Ministério da Saúde (PE), este sistema permite que a equipe de fiscalização acompanhe o andamento das obras do Novo PAC em tempo real, com geração automática de relatórios e gráficos detalhados.',
imagem: 'https://i.imgur.com/9zZVemS.png',
linkSite: 'https://dashboard-sismob-obra.vercel.app/',
linkGithub: 'https://github.com/MinisterioSaudeEstag/dashboard-sismob-monitoramento-obras-novo-pac.git',
stacks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
decisoes: [
{ numero: '01', titulo: 'Acompanhamento de Obras', texto: 'A locação dos dados no dashboard é feito através da importação de planilhas disponibilizado pelo Sismob através de pesquisas.' },
{ numero: '02', titulo: 'Interatividade', texto: 'O dashboard conta com gráficos e mapas interativos e 100% atualizados mensalmente, através do órgão Sismob.' }
]
},
{
id: '2',
nome: 'ChronoTask',
subtitulo: 'Gestão de tarefas departamental em tempo real.',
descricao: 'Desenvolvido para os setores COTRE e DITRE. A chefia designa demandas com controle total, chat em tempo real, calendário dinâmico e extração de planilhas.',
imagem: 'https://i.imgur.com/hP7jXjE.png',
linkSite: 'https://chrono-task-gilt.vercel.app/', 
linkGithub: 'https://github.com/MinisterioSaudeEstag/ChronoTask.git',
stacks: ['React', 'Node.js', 'WebSockets', 'Tailwind CSS'],
decisoes: [
{ numero: '01', titulo: 'Comunicação em Tempo Real', texto: 'Uso de WebSockets para garantir que o chat e as atualizações de status das tarefas apareçam instantaneamente para todos os funcionários logados.' },
{ numero: '02', titulo: 'Filtros e Exportação', texto: 'Sistema complexo de filtragem no frontend acoplado a uma rota de geração de CSV no backend, facilitando a prestação de contas da chefia.' }
]
},
{
id: '3',
nome: 'Dashboard - Monitoramento de Convênios',
subtitulo: 'Sistema de monitoramento de convênios do Ministério da Saúde (PE).',
descricao: 'Desenvolvido para o Ministério da Saúde (PE), este sistema permite que a equipe de fiscalização acompanhe o andamento dos convênios em tempo real, com geração automática de relatórios e gráficos detalhados.',
imagem: 'https://i.imgur.com/YrRSL7i.png',
linkSite: 'https://dashboard-monitoramento-convenios.vercel.app/',
linkGithub: 'https://github.com/MinisterioSaudeEstag/dashboard-monitoramento-convenios.git',
stacks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
decisoes: [
  { numero: '01', titulo: 'Acompanhamento de Convênios', texto: 'A locação dos dados no dashboard é feito através da importação de planilhas disponibilizado pelo portal do Fundo Nacional de Saúde, onde as informações são filtradas e voltadas somente para Pernambuco, atualizado mensalmente.' }
]
}
];

const ProjetoCard = ({ projeto, index }: { projeto: any, index: number }) => {
const slideAnim = useRef(new Animated.Value(50)).current;
const fadeAnim = useRef(new Animated.Value(0)).current;

React.useEffect(() => {
Animated.parallel([
Animated.timing(fadeAnim, { toValue: 1, duration: 600, delay: index * 200, useNativeDriver: true }),
Animated.spring(slideAnim, { toValue: 0, tension: 40, friction: 8, delay: index * 200, useNativeDriver: true })
]).start();
}, []);

const openLink = (url: string) => {
if (url) Linking.openURL(url);
};

return (
<Animated.View style={[styles.cardContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>

  <Text style={styles.projectName}>{projeto.nome}</Text>
  <Text style={styles.projectSubtitle}>{projeto.subtitulo}</Text>
  <Text style={styles.projectDescription}>{projeto.descricao}</Text>

  <View style={styles.buttonsRow}>
    {!!projeto.linkSite && (
      <TouchableOpacity style={styles.primaryButton} onPress={() => openLink(projeto.linkSite)}>
        <Text style={styles.primaryButtonText}>Visitar o site</Text>
        <MaterialIcons name="open-in-new" size={16} color="#0F172A" style={{ marginLeft: 6 }} />
      </TouchableOpacity>
    )}
    {!!projeto.linkGithub && (
      <TouchableOpacity style={styles.secondaryButton} onPress={() => openLink(projeto.linkGithub)}>
        <MaterialIcons name="code" size={18} color="#F8FAFC" style={{ marginRight: 6 }} />
        <Text style={styles.secondaryButtonText}>Código no GitHub</Text>
      </TouchableOpacity>
    )}
  </View>

  <View style={styles.browserMockup}>
    <View style={styles.browserHeader}>
      <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
      <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
      <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
    </View>
    <Image source={{ uri: projeto.imagem }} style={styles.projectImage} />
  </View>

  <View style={styles.stacksContainer}>
    {projeto.stacks.map((tech: string, i: number) => (
      <View key={i} style={styles.stackBadge}>
        <Text style={styles.stackText}>{tech}</Text>
      </View>
    ))}
  </View>

  <View style={styles.decisionsSection}>
    <Text style={styles.decisionsSectionTitle}>DECISÕES TÉCNICAS</Text>
    <View style={styles.decisionsGrid}>
      {projeto.decisoes.map((decisao: any, i: number) => (
        <View key={i} style={styles.decisionItem}>
          <Text style={styles.decisionNumber}>{decisao.numero}</Text>
          <View style={styles.decisionTextContent}>
            <Text style={styles.decisionTitle}>{decisao.titulo}</Text>
            <Text style={styles.decisionText}>{decisao.texto}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>

  <View style={styles.divider} />
</Animated.View>


);
};

export default function Projetos() {
const screenFade = useRef(new Animated.Value(0)).current;

useFocusEffect(
useCallback(() => {
screenFade.setValue(0);
Animated.timing(screenFade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
}, [])
);

return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.container, { opacity: screenFade }]}>

        <Text style={styles.pageTitle}>Estudos de Caso & Projetos</Text>

        {PROJETOS_RICOS.map((projeto, index) => (
          <ProjetoCard key={projeto.id} projeto={projeto} index={index} />
        ))}
        
        <View style={{ height: 40 }} />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: 'transparent' },
scrollContent: { padding: 24, paddingTop: 40 },

pageTitle: { color: '#F8FAFC', fontSize: 28, fontWeight: '900', marginBottom: 40, letterSpacing: -0.5 },

cardContainer: { marginBottom: 20 },

projectName: { color: '#F8FAFC', fontSize: 36, fontWeight: '900', letterSpacing: -1, marginBottom: 8 },
projectSubtitle: { color: '#38BDF8', fontSize: 18, fontWeight: '600', lineHeight: 24, marginBottom: 16 },
projectDescription: { color: '#94A3B8', fontSize: 15, lineHeight: 24, marginBottom: 24 },

buttonsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 32 },
primaryButton: {
backgroundColor: '#CA8A04',
flexDirection: 'row', alignItems: 'center',
paddingVertical: 10, paddingHorizontal: 16, borderRadius: 6
},
primaryButtonText: { color: '#0F172A', fontSize: 14, fontWeight: 'bold' },
secondaryButton: {
flexDirection: 'row', alignItems: 'center',
paddingVertical: 10, paddingHorizontal: 16,
borderRadius: 6, borderWidth: 1, borderColor: '#334155'
},
secondaryButtonText: { color: '#F8FAFC', fontSize: 14, fontWeight: 'bold' },

browserMockup: {
backgroundColor: '#1E293B', borderRadius: 8, overflow: 'hidden',
borderWidth: 1, borderColor: '#334155', marginBottom: 24
},
browserHeader: {
backgroundColor: '#0F172A', height: 28, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 6
},
dot: { width: 10, height: 10, borderRadius: 5 },
projectImage: { width: '100%', height: 200, resizeMode: 'cover' },

stacksContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 32 },
stackBadge: {
borderBottomWidth: 2, borderBottomColor: '#38BDF8', borderStyle: 'dotted', 
paddingBottom: 2, paddingHorizontal: 4
},
stackText: { color: '#F8FAFC', fontSize: 13, fontWeight: '600' },

decisionsSection: { marginTop: 10 },
decisionsSectionTitle: { color: '#94A3B8', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.5, marginBottom: 20 },
decisionsGrid: { gap: 24 },
decisionItem: { flexDirection: 'row', gap: 16 },
decisionNumber: { color: '#CA8A04', fontSize: 24, fontWeight: '900', fontFamily: 'serif' }, 
decisionTextContent: { flex: 1 },
decisionTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
decisionText: { color: '#94A3B8', fontSize: 14, lineHeight: 22 },

divider: { height: 1, backgroundColor: '#1E293B', width: '100%', marginTop: 40, marginBottom: 20 },
});