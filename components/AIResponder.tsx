import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import SparkleIcon from '../icons/SparkleIcon';

interface AIResponderProps {
  topicTitle: string;
}

const AIResponder: React.FC<AIResponderProps> = ({ topicTitle }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const ai = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    try {
      ai.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI. AI features will be disabled.", err);
      setError("Não foi possível inicializar o assistente de IA. Verifique a chave de API.");
    }
  }, []);

  const handleAskAI = async () => {
    if (!question.trim() || !ai.current) return;

    setIsLoading(true);
    setResponse('');
    setError('');

    const prompt = `
      Você é um instrutor especialista em redes de computadores, com profundo conhecimento em Cisco, Mikrotik, Linux, e segurança.
      Seu tom é didático, claro e preciso.
      
      O aluno está estudando o tópico: "${topicTitle}".
      
      Responda a seguinte pergunta do aluno de forma completa, mas concisa.
      Use formatação markdown simples (negrito com **, listas com - ou *) para organizar a resposta.
      
      Pergunta do Aluno: "${question}"
    `;

    try {
      const result = await ai.current.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      let aiText = result.text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
      setResponse(aiText);
    } catch (err) {
      console.error("Error generating AI response:", err);
      setError("Ocorreu um erro ao gerar a resposta. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-responder">
      <h3><SparkleIcon /> IA Responde</h3>
      <p>Tem alguma dúvida sobre <strong>{topicTitle}</strong>? Pergunte ao especialista!</p>
      <div className="ai-input-group">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta aqui..."
          rows={3}
          disabled={isLoading || !ai.current}
        />
        <button onClick={handleAskAI} disabled={isLoading || !question.trim() || !ai.current}>
          {isLoading ? 'Pensando...' : 'Perguntar à IA'}
        </button>
      </div>
      {error && <p className="ai-error">{error}</p>}
      {response && (
        <div className="ai-response">
          <p dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      )}
    </div>
  );
};

export default AIResponder;
