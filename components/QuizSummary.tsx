import React, { useMemo } from 'react';
import type { Language } from './QuizView';

interface QuizSummaryProps {
  score: number;
  total: number;
  language: Language;
  onRestart: () => void;
  onBackToGuide: () => void;
}

const translations = {
    en: { mainTitle: "Academia da Rede - Quiz", summaryTitle: "Quiz Complete!", summaryText: (score:number, total:number) => `You scored ${score} out of ${total}.`, passMessage: "Excellent! You passed.", failMessage: "Keep studying! You'll get it next time.", restart: "Play Again" },
    pt: { mainTitle: "Academia da Rede - Quiz", summaryTitle: "Quiz Concluído!", summaryText: (score:number, total:number) => `Você acertou ${score} de ${total}.`, passMessage: "Excelente! Você passou.", failMessage: "Continue estudando! Você consegue na próxima.", restart: "Jogar Novamente" }
};

const QuizSummary = ({ score, total, language, onRestart, onBackToGuide }: QuizSummaryProps) => {
    const t = useMemo(() => translations[language], [language]);
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const passed = percentage >= 85;

    return (
        <>
            <header className="quiz-header">
                <a className="back-link" onClick={onBackToGuide}>&larr; Voltar ao Guia</a>
                <h1>{t.mainTitle}</h1>
            </header>
            <div className="card">
                <h2>{t.summaryTitle}</h2>
                <p>{t.summaryText(score, total)}</p>
                <div id="result-indicator" style={{ border: `5px solid var(${passed ? '--success-color' : '--danger-color'})` }}>
                    <span style={{ color: `var(${passed ? '--success-color' : '--danger-color'})` }}>
                        {percentage}%
                    </span>
                </div>
                <p id="result-message">{passed ? t.passMessage : t.failMessage}</p>
                <button className="btn btn-primary" onClick={onRestart}>{t.restart}</button>
            </div>
        </>
    );
};

export default QuizSummary;