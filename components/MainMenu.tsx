import React, { useMemo } from 'react';
import type { Language } from './QuizView';

interface MainMenuProps {
  onSelect: (mode: 'training' | 'simulator') => void;
  language: Language;
  onBackToGuide: () => void;
}

const translations = {
    en: { mainTitle: "CCNAPro Quiz", mainMenuTitle: "Choose a Mode", trainingMode: "Training Mode", examSimulator: "Exam Simulator", trainingDescription: "Practice with instant feedback on each question.", simulatorDescription: "100 questions in 120 minutes. Just like the real exam." },
    pt: { mainTitle: "CCNAPro Quiz", mainMenuTitle: "Escolha um Modo", trainingMode: "Modo Treino", examSimulator: "Simulador de Exame", trainingDescription: "Pratique com feedback instantâneo em cada questão.", simulatorDescription: "100 questões em 120 minutos. Igual ao exame real." }
};


const MainMenu = ({ onSelect, language, onBackToGuide }: MainMenuProps) => {
    const t = useMemo(() => translations[language], [language]);

    return (
    <>
      <header className="quiz-header">
        <a className="back-link" onClick={onBackToGuide}>&larr; Voltar ao Guia</a>
        <h1>{t.mainTitle}</h1>
      </header>
      <div className="card">
        <h2>{t.mainMenuTitle}</h2>
        <div className="button-group vertical">
          <button className="btn btn-primary" onClick={() => onSelect('training')}>{t.trainingMode}</button>
          <button className="btn btn-secondary" onClick={() => onSelect('simulator')}>{t.examSimulator}</button>
        </div>
        <p className="description">{t.trainingDescription}</p>
        <p className="description">{t.simulatorDescription}</p>
      </div>
    </>
  );
};

export default MainMenu;
