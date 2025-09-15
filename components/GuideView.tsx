import React, { useState, MouseEvent } from 'react';
import { topicsData, termsData } from '../data/content';
import CidrCalculator from './CidrCalculator';
import AIResponder from './AIResponder';

interface GuideViewProps {
  onStartQuiz: () => void;
}

type ModalTerm = {
  title: string;
  definition: string;
  analogy: string;
} | null;

const courseStructure = [
    { title: "Módulo 1: Ponto de Partida", lessons: [
        { id: "boas_vindas_1", title: "Boas-vindas à Sua Jornada" }
    ]},
    { title: "Módulo 2: Fundamentos Essenciais", lessons: [
        { id: "introducao_redes_1", title: "Decifrando as Redes" },
        { id: "introducao_redes_2", title: "O Propósito da Conectividade" },
        { id: "introducao_redes_3", title: "Desenhando a Rede: Topologias" },
        { id: "introducao_redes_4", title: "Conhecendo os Equipamentos" },
        { id: "introducao_redes_5", title: "Classificação por Escala" },
        { id: "introducao_redes_6", title: "IPs: Endereços Públicos vs. Privados" },
        { id: "introducao_redes_7", title: "A Função da Máscara de Sub-rede" },
        { id: "introducao_redes_8", title: "Protocolos: A Linguagem da Rede" },
        { id: "introducao_redes_9", title: "Anatomia de uma Rede" },
        { id: "introducao_redes_10", title: "DNS: A Agenda de Contatos da Web" },
        { id: "introducao_redes_11", title: "Modelo OSI: As 7 Camadas" },
        { id: "introducao_redes_12", title: "O Papel dos Servidores" },
        { id: "introducao_redes_13", title: "VPN: Seu Túnel Seguro" },
        { id: "introducao_redes_14", title: "DMZ: A Zona de Segurança" },
        { id: "introducao_redes_15", title: "Proxy: O Intermediário Inteligente" },
        { id: "introducao_redes_16", title: "Acesso Remoto: SSH vs. Telnet" },
        { id: "introducao_redes_17", title: "Firewall: O Guardião Digital" },
        { id: "introducao_redes_18", title: "Entendendo o CGNAT" },
        { id: "introducao_redes_19", title: "Ping: O Teste de Conexão" },
        { id: "introducao_redes_20", title: "Modos de Roteador: Router vs. Bridge" },
        { id: "introducao_redes_21", title: "A Arte de Crimpar Cabos" }
    ]},
    { title: "Módulo 3: Laboratório Virtual com EVE-NG", lessons: [
        { id: "eve_ng_1", title: "Instalando o EVE-NG" },
        { id: "eve_ng_2", title: "Primeiros Passos e Soluções" },
        { id: "eve_ng_3", title: "Adicionando o Mikrotik ao Lab" },
        { id: "eve_ng_4", title: "Acesso com Winbox e Erros Comuns" }
    ]},
    { title: "Módulo 4: Dominando o Mikrotik - Básico", lessons: [
        { id: "mikrotik_1_1", title: "Introdução ao RouterOS" },
        { id: "mikrotik_1_2", title: "Interfaces de Gerenciamento" },
        { id: "mikrotik_1_3", title: "Configurando Endereços IP" },
        { id: "mikrotik_1_4", title: "Gerenciamento de Usuários e Senhas" },
        { id: "mikrotik_1_5", title: "Sincronizando o Horário com NTP" },
        { id: "mikrotik_1_6", title: "Atualização e Downgrade do Sistema" },
        { id: "mikrotik_1_7", title: "Estratégias de Backup" },
        { id: "mikrotik_1_8", title: "Automatizando Backups" },
        { id: "mikrotik_1_9", title: "Enviando Backups por E-mail" },
        { id: "mikrotik_1_10", title: "DHCP: Cliente e Servidor" },
        { id: "mikrotik_1_11", title: "Unificando Portas com Bridge" },
        { id: "mikrotik_1_12", title: "Rotas Estáticas e VPNs" },
        { id: "mikrotik_1_13", title: "Descobrindo Dispositivos Vizinhos" },
        { id: "mikrotik_1_14", title: "Controle de Banda (QoS)" },
        { id: "mikrotik_1_15", title: "Redirecionamento de Portas (NAT)" },
        { id: "mikrotik_1_16", title: "Firewall: Regras Essenciais" },
        { id: "mikrotik_1_17", title: "Monitoramento com SNMP" },
        { id: "mikrotik_1_18", title: "A Importância de Documentar" },
        { id: "mikrotik_1_19", title: "Analisando Uso de CPU" },
        { id: "mikrotik_1_20", title: "Configuração Padrão para Clientes" }
    ]},
    { title: "Módulo 5: Dominando o Mikrotik - Avançado", lessons: [
        { id: "mikrotik_2_1", title: "Túneis EoIP: Estendendo a Camada 2" },
        { id: "mikrotik_2_2", title: "OSPF: Roteamento Dinâmico - Parte 1" },
        { id: "mikrotik_2_3", title: "OSPF: Roteamento Dinâmico - Parte 2" },
        { id: "mikrotik_2_4", title: "VPN Segura com L2TP/IPsec" },
        { id: "mikrotik_2_5", title: "Análise de Tráfego com Torch" },
        { id: "mikrotik_2_6", title: "Segmentação de Rede com VLANs" },
        { id: "mikrotik_2_7", title: "Failover de Link com Netwatch" },
        { id: "mikrotik_2_8", title: "Recuperando RouterBOARDS com Netinstall" }
    ]},
    { title: "Módulo 6: BGP e o Universo dos ISPs", lessons: [
        { id: "bgp_1", title: "Como a Internet Realmente Funciona" },
        { id: "bgp_2", title: "Ecossistema: PTT, CDN e NIC.br" },
        { id: "bgp_3", title: "Explorando o Menu BGP no RouterOS" },
        { id: "bgp_4", title: "Estabelecendo a Primeira Sessão BGP" },
        { id: "bgp_5", title: "Filtragem de Rotas: Boas Práticas" }
    ]},
    { title: "Módulo 7: Servidores com Linux", lessons: [
        { id: "linux_1", title: "Introdução ao Mundo Linux" },
        { id: "linux_2", title: "Instalando um Servidor Linux" },
        { id: "linux_3", title: "Comandos Essenciais do Terminal" },
        { id: "linux_4", title: "Aumentando a Segurança do SSH" },
        { id: "linux_5", title: "Monitoramento com Zabbix" },
        { id: "linux_6", title: "Dashboards com Grafana" },
        { id: "linux_7", title: "Integrando Zabbix e Grafana" },
        { id: "linux_8", title: "Traduzindo a Interface do Zabbix" },
        { id: "linux_9", title: "Recuperação de Senha do Zabbix" },
        { id: "linux_10", title: "Implementando um DNS Recursivo" }
    ]},
    { title: "Módulo 8: Segurança de Perímetro", lessons: [
        { id: "firewall_1", title: "Estratégias de Firewall Corporativo" }
    ]},
    { title: "Módulo 9: Cenários de Provedor (ISP)", lessons: [
        { id: "provedor_1", title: "LAB: Roteamento Interno com OSPF" },
        { id: "provedor_2", title: "Autenticação de Clientes com PPPoE" },
        { id: "provedor_3", title: "Instalando o MK-Auth no EVE-NG" },
        { id: "provedor_4", title: "Solucionando a Instalação do MK-Auth" },
        { id: "provedor_5", title: "Integração Radius com MK-Auth" }
    ]},
    { title: "Módulo 10: Equipamentos de Grande Porte", lessons: [
        { id: "huawei_1", title: "Adicionando Imagem Huawei no EVE-NG" }
    ]},
    { title: "Módulo 11: Semana do Analista de Redes", lessons: [
        { id: "semana_1", title: "Revisão Intensiva - Aula 1" },
        { id: "semana_2", title: "Revisão Intensiva - Aula 2" },
        { id: "semana_3", title: "Revisão Intensiva - Aula 3" },
        { id: "semana_4", title: "Atualização: Mikrotik no EVE-NG" }
    ]},
    { title: "Módulo 12: Tópicos Extras", lessons: [
        { id: "extras_1", title: "Estudo de Caso: Ataque DDoS" },
        { id: "extras_2", title: "Bloqueando Sites via Arquivo Hosts" }
    ]},
    { title: "Módulo 13: Ferramentas", lessons: [
        { id: "cidr_calculator", title: "Calculadora CIDR" }
    ]}
];


const GuideView = ({ onStartQuiz }: GuideViewProps) => {
  const [activeTopic, setActiveTopic] = useState('boas_vindas_1');
  const [modalTerm, setModalTerm] = useState<ModalTerm>(null);

  const handleContentClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('term')) {
      const termKey = target.dataset.term;
      if (termKey && termsData[termKey]) {
        setModalTerm(termsData[termKey]);
      }
    }
  };
  
  const renderContent = () => {
    if (activeTopic === 'cidr_calculator') {
      return (
        <>
            <h2>{topicsData.cidr_calculator.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: topicsData.cidr_calculator.content }} />
            <CidrCalculator />
        </>
      )
    }

    const topic = topicsData[activeTopic];
    if (!topic) {
      return <h2>Tópico não encontrado</h2>;
    }
    
    return (
      <>
        <h2>{topic.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        <AIResponder topicTitle={topic.title} />
      </>
    );
  };
  
  return (
    <div id="guide-view">
      <header className="main-header">
        <div className="header-content">
          <h1>Academia da Rede</h1>
          <p>Domine os conceitos de redes, do básico ao avançado, com nosso guia interativo.</p>
        </div>
        <button className="quiz-button" onClick={onStartQuiz}>Praticar com Quiz CCNA</button>
      </header>

      <div className="container">
        <aside className="sidebar">
          <nav>
            <h3>Menu do Curso</h3>
            <ul>
                {courseStructure.map(module => (
                    <li key={module.title}>
                        <span className="module-title">{module.title}</span>
                        <ul className="topic-list">
                            {module.lessons.map(lesson => (
                                <li key={lesson.id}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTopic(lesson.id) }} className={activeTopic === lesson.id ? 'active' : ''}>
                                        {lesson.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            
            <span className="module-title">Prática</span>
            <ul className="topic-list">
                <li><a onClick={onStartQuiz} style={{cursor: 'pointer'}}>CCNAPro Quiz</a></li>
            </ul>
          </nav>
        </aside>

        <main id="content-area" className="content-area" onClick={handleContentClick}>
            {renderContent()}
        </main>
      </div>

      {modalTerm && (
        <div className="modal-overlay" onClick={() => setModalTerm(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalTerm(null)} className="modal-close-btn">&times;</button>
            <h3>{modalTerm.title}</h3>
            <h4>Definição:</h4>
            <p>{modalTerm.definition}</p>
            <h4>Analogia:</h4>
            <p>{modalTerm.analogy}</p>
          </div>
        </div>
      )}
      
      <footer>
        <p>&copy; 2024 Academia da Rede. Desenvolvido por Maicon Gois.&reg;</p>
      </footer>
    </div>
  );
};

export default GuideView;