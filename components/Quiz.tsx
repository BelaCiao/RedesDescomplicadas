import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { Language } from './QuizView';
import { GoogleGenAI } from '@google/genai';

interface QuizProps {
  questions: any[];
  mode: 'training' | 'simulator';
  language: Language;
  onComplete: (score: number, total: number) => void;
  onQuit: () => void;
}

const translations = {
    en: { question: "Question", of: "of", timer: "Time Left", quit: "Quit", next: "Next Question", correct: "Correct!", incorrect: "Incorrect.", explain: "Explain with AI", generating: "Generating...", aiExplanationTitle: "AI Explanation" },
    pt: { question: "Questão", of: "de", timer: "Tempo Restante", quit: "Sair", next: "Próxima Questão", correct: "Correto!", incorrect: "Incorreto.", explain: "Explicar com IA", generating: "Gerando...", aiExplanationTitle: "Explicação da IA" }
};

// Fix: Explicitly type the component with React.FC<QuizProps> to solve the TypeScript error when passing the 'key' prop.
const Quiz: React.FC<QuizProps> = ({ questions, mode, language, onComplete, onQuit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(120 * 60);
    const [aiExplanation, setAiExplanation] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    
    const timerInterval = useRef<number | null>(null);
    const ai = useRef<GoogleGenAI | null>(null);

    const t = useMemo(() => translations[language], [language]);

    useEffect(() => {
        try {
            ai.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
        } catch (error) {
            console.error("Failed to initialize GoogleGenAI. AI features will be disabled.", error);
        }
    }, []);

    useEffect(() => {
        if (mode === 'simulator') {
            timerInterval.current = window.setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerInterval.current!);
                        onComplete(score, questions.length);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerInterval.current) clearInterval(timerInterval.current);
        };
    }, [mode, onComplete, score, questions.length]);

    const currentQuestion = questions[currentQuestionIndex];
    const qData = currentQuestion?.[language];

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setIsAnswered(false);
            setSelectedAnswer(null);
            setAiExplanation('');
        } else {
            onComplete(score, questions.length);
        }
    };

    const handleAnswer = (selectedIndex: number) => {
        if (isAnswered) return;

        setIsAnswered(true);
        setSelectedAnswer(selectedIndex);
        
        const correctAnswer = qData.answer;
        const correctAnswers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
        
        if (correctAnswers.includes(selectedIndex)) {
            setScore(prev => prev + 1);
        }

        if (mode === 'simulator') {
            setTimeout(goToNextQuestion, 500);
        }
    };
    
    const fetchAIExplanation = async () => {
        if (!ai.current || !qData) return;

        setIsGenerating(true);
        setAiExplanation(t.generating);

        const optionsString = qData.options.map((opt:string, i:number) => `Opção ${i}: ${opt}`).join('\n');
        const correctAnswers = Array.isArray(qData.answer) ? qData.answer : [qData.answer];
        const correctAnswerString = correctAnswers.map((i:number) => qData.options[i]).join(', ');

        const prompt = `
            Você é um instrutor especialista em redes Cisco, com foco no exame CCNA.
            Explique a seguinte questão de forma clara, concisa e didática.
            
            Primeiro, explique por que a resposta correta está certa.
            Depois, explique por que cada uma das outras opções está errada.
            
            Use uma linguagem simples, como se estivesse ensinando um aluno.
            Formate sua resposta usando markdown simples (use ** para negrito).
            
            Idioma da resposta: ${language === 'pt' ? 'Português do Brasil' : 'English'}
            
            Questão: "${qData.question}"
            
            Opções:
            ${optionsString}
            
            Resposta Correta: "${correctAnswerString}"
        `;

        try {
            const response = await ai.current.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
            });
            let explanationText = response.text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>');
            setAiExplanation(explanationText);
        } catch (error) {
            console.error("Error fetching AI explanation:", error);
            setAiExplanation(`<p>Error generating explanation. Please try again.</p>`);
        } finally {
            setIsGenerating(false);
        }
    };


    if (!qData) return null;

    const correctAnswers = Array.isArray(qData.answer) ? qData.answer : [qData.answer];
    const isCorrect = selectedAnswer !== null && correctAnswers.includes(selectedAnswer);

    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return (
        <div className="card quiz-card">
            <div className="quiz-header-info">
                <div id="progress-container">
                    <span>{t.question} {currentQuestionIndex + 1} {t.of} {questions.length}</span>
                    <div id="progress-bar-full">
                        <div id="progress-bar" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
                    </div>
                </div>
                {mode === 'simulator' && (
                    <div id="timer-container">
                        <span>{t.timer}</span>: <span>{minutes}:{seconds}</span>
                    </div>
                )}
            </div>
            <h3 id="question-text">{qData.question}</h3>
            <div id="options-container">
                {qData.options.map((option: string, index: number) => {
                    let className = 'option';
                    if (isAnswered) {
                        className += ' disabled';
                        if (correctAnswers.includes(index)) {
                            className += ' correct';
                        } else if (selectedAnswer === index) {
                            className += ' incorrect';
                        }
                    }
                    return (
                        <button key={index} className={className} onClick={() => handleAnswer(index)}>
                            {option}
                        </button>
                    );
                })}
            </div>
            {isAnswered && mode === 'training' && (
                <div id="feedback-container" className={isCorrect ? 'correct' : 'incorrect'}>
                    {isCorrect ? t.correct : t.incorrect}
                </div>
            )}
            {aiExplanation && mode === 'training' && (
                 <div id="ai-explanation">
                    <h4>{t.aiExplanationTitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: aiExplanation }} />
                 </div>
            )}
            <div className="quiz-actions">
                <button className="btn btn-secondary" onClick={onQuit}>{t.quit}</button>
                {mode === 'training' && isAnswered && ai.current && (
                     <button className="btn btn-secondary" id="explain-btn" onClick={fetchAIExplanation} disabled={isGenerating || !!aiExplanation}>
                        {isGenerating ? t.generating : t.explain}
                    </button>
                )}
                 {mode === 'training' && isAnswered && (
                    <button className="btn btn-primary" id="next-btn" onClick={goToNextQuestion}>{t.next}</button>
                )}
            </div>
        </div>
    );
};

export default Quiz;