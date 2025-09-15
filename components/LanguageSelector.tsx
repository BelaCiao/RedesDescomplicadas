import React from 'react';
import type { Language } from './QuizView';

interface LanguageSelectorProps {
  onSelect: (lang: Language) => void;
  onBackToGuide: () => void;
}

const LanguageSelector = ({ onSelect, onBackToGuide }: LanguageSelectorProps) => {
  return (
    <>
      <header className="quiz-header">
        <a className="back-link" onClick={onBackToGuide}>&larr; Voltar ao Guia</a>
        <h1>Academia da Rede - Quiz</h1>
      </header>
      <div className="card">
        <h2>Select Your Language / Selecione Seu Idioma</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => onSelect('en')}>English</button>
          <button className="btn btn-primary" onClick={() => onSelect('pt')}>Português</button>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;