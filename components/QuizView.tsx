import React, { useState, useMemo } from 'react';
import LanguageSelector from './LanguageSelector';
import MainMenu from './MainMenu';
import Quiz from './Quiz';
import QuizSummary from './QuizSummary';
import { questions } from '../data/content';

type QuizScreen = 'language' | 'mainMenu' | 'quiz' | 'summary';
type QuizMode = 'training' | 'simulator';
export type Language = 'en' | 'pt';

interface QuizViewProps {
  onBackToGuide: () => void;
}

const translations = {
    en: { mainTitle: "CCNAPro Quiz" },
    pt: { mainTitle: "CCNAPro Quiz" }
};

const QuizView = ({ onBackToGuide }: QuizViewProps) => {
    const [screen, setScreen] = useState<QuizScreen>('language');
    const [language, setLanguage] = useState<Language>('en');
    const [mode, setMode] = useState<QuizMode>('training');
    const [lastScore, setLastScore] = useState({ score: 0, total: 0 });

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
        setScreen('mainMenu');
    };

    const handleModeSelect = (selectedMode: QuizMode) => {
        setMode(selectedMode);
        setScreen('quiz');
    };

    const handleQuizComplete = (score: number, total: number) => {
        setLastScore({ score, total });
        setScreen('summary');
    };
    
    const handleRestart = () => {
        setScreen('mainMenu');
    }
    
    const handleQuit = () => {
        setScreen('mainMenu');
    }

    const t = useMemo(() => translations[language], [language]);

    const shuffledQuestions = useMemo(() => {
        return [...questions].sort(() => Math.random() - 0.5);
    }, []);

    const quizQuestions = useMemo(() => {
        const count = mode === 'simulator' ? 100 : shuffledQuestions.length;
        return shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
    }, [mode, shuffledQuestions]);


    return (
        <div id="quiz-view">
            <div className="quiz-container">
                <div className={`screen ${screen === 'language' ? 'active' : ''}`}>
                    <LanguageSelector onSelect={handleLanguageSelect} onBackToGuide={onBackToGuide} />
                </div>
                <div className={`screen ${screen === 'mainMenu' ? 'active' : ''}`}>
                    <MainMenu onSelect={handleModeSelect} language={language} onBackToGuide={onBackToGuide} />
                </div>
                <div className={`screen ${screen === 'quiz' ? 'active' : ''}`}>
                     <header className="quiz-header">
                        <a className="back-link" onClick={onBackToGuide}>&larr; Voltar ao Guia</a>
                        <h1>{t.mainTitle}</h1>
                    </header>
                    <Quiz
                        key={`${mode}-${language}`}
                        questions={quizQuestions}
                        mode={mode}
                        language={language}
                        onComplete={handleQuizComplete}
                        onQuit={handleQuit}
                    />
                </div>
                <div className={`screen ${screen === 'summary' ? 'active' : ''}`}>
                    <QuizSummary
                        score={lastScore.score}
                        total={lastScore.total}
                        language={language}
                        onRestart={handleRestart}
                        onBackToGuide={onBackToGuide}
                    />
                </div>
                 <footer>
                    <p>&copy; 2024 Maicon Gois. Todos os direitos reservados.&reg;</p>
                </footer>
            </div>
        </div>
    );
};

export default QuizView;
