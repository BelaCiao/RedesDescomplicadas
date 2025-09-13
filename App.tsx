import React, { useState } from 'react';
import GuideView from './components/GuideView';
import QuizView from './components/QuizView';

type View = 'guide' | 'quiz';

function App() {
  const [currentView, setCurrentView] = useState<View>('guide');

  const goToQuiz = () => setCurrentView('quiz');
  const goToGuide = () => setCurrentView('guide');

  return (
    <>
      <div className={`view ${currentView === 'guide' ? 'active' : ''}`}>
        <GuideView onStartQuiz={goToQuiz} />
      </div>
      <div className={`view ${currentView === 'quiz' ? 'active' : ''}`}>
        <QuizView onBackToGuide={goToGuide} />
      </div>
    </>
  );
}

export default App;
