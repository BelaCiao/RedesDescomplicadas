import React, { useState, MouseEvent } from 'react';
import { topicsData, termsData } from '../data/content';
import CidrCalculator from './CidrCalculator';

interface GuideViewProps {
  onStartQuiz: () => void;
}

type ModalTerm = {
  title: string;
  definition: string;
  analogy: string;
} | null;

const courseStructure = [
    {
        title: "Módulo 1: Fundamentos Essenciais",
        lessons: [
            { id: "course_1_1", title: "1.1: Introdução às Redes Modernas" },
            { id: "course_1_2", title: "1.2: Modelos OSI e TCP/IP" },
            { id: "course_1_3", title: "1.3: Camada Física e Numeração" },
            { id: "course_1_4", title: "1.4: Camada de Enlace e MAC" },
        ],
    },
    {
        title: "Módulo 2: Switching e LAN",
        lessons: [
            { id: "course_2_1", title: "2.1: Config. Básica de Switches" },
            { id: "course_2_2", title: "2.2: Conceitos de VLANs" },
            { id: "course_2_3", title: "2.3: Trunking e Inter-VLAN" },
            { id: "course_2_4", title: "2.4: Spanning Tree Protocol (STP)" },
        ],
    },
    {
        title: "Módulo 3: Roteamento IP",
        lessons: [
            { id: "course_3_1", title: "3.1: Endereçamento IPv4 e Sub-redes" },
            { id: "course_3_2", title: "3.2: Roteamento Estático e Padrão" },
            { id: "course_3_3", title: "3.3: Roteamento Dinâmico: OSPF" },
            { id: "course_3_4", title: "3.4: Endereçamento IPv6" },
        ],
    },
    {
        title: "Módulo 5: Tópicos Avançados",
        lessons: [
            { id: "course_5_1", title: "5.1: Arquitetura e Redundância (FHRP)" },
            { id: "course_5_2", title: "5.2: Qualidade de Serviço (QoS)" },
            { id: "course_5_3", title: "5.3: Virtualização e Automação" },
            { id: "course_5_4", title: "5.4: Preparação para o Exame" },
        ],
    },
];

const quickGuideTopics = Object.keys(topicsData)
    .filter(k => !k.startsWith('course_') && !['cidr_calculator', 'zabbix'].includes(k));


const GuideView = ({ onStartQuiz }: GuideViewProps) => {
  const [activeTopic, setActiveTopic] = useState('course_1_1');
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
      </>
    );
  };
  
  return (
    <div id="guide-view">
      <header className="main-header">
        <div className="header-content">
          <h1>Redes - Do campo ao NOC</h1>
          <p>Seu guia prático, do campo ao Network Operation Center.</p>
        </div>
        <button className="quiz-button" onClick={onStartQuiz}>Praticar com Quiz</button>
      </header>

      <div className="container">
        <aside className="sidebar">
          <nav>
            <h3>Curso Preparatório CCNA</h3>
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

            <span className="module-title">Guia Rápido: Conceitos</span>
            <ul className="topic-list">
                {quickGuideTopics.map(topicId => (
                    <li key={topicId}>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTopic(topicId) }} className={activeTopic === topicId ? 'active' : ''}>
                            {topicsData[topicId].title.split('(')[0]}
                        </a>
                    </li>
                ))}
            </ul>

            <span className="module-title">Ferramentas</span>
            <ul className="topic-list">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTopic('cidr_calculator')}} className={activeTopic === 'cidr_calculator' ? 'active' : ''}>Calculadora CIDR</a></li>
            </ul>

            <span className="module-title">Monitoramento Avançado</span>
            <ul className="topic-list">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTopic('zabbix')}} className={activeTopic === 'zabbix' ? 'active' : ''}>Monitoramento com Zabbix</a></li>
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
        <p>&copy; 2024 Maicon Gois. Todos os direitos reservados.&reg;</p>
      </footer>
    </div>
  );
};

export default GuideView;