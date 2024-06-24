import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import OptionSelector from './components/OptionSelector';
import Navigation from './components/Navigation';

const questions = [
  "I have ambitious aims of making a difference.",
  "My leadership journey has progressed as I anticipated.",
  "I have spent fewer than 4 years in full time service or ministry.",
  "My plans are likely to succeed.",
  "I’m beginning to believe the journey of service will be much harder than I anticipated.",
  "I question whether I can remain effective in my role long-term."
];

const options = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [progress, setProgress] = useState(0);

  // Function to calculate and set progress
  const updateProgress = (responses, currentQuestion) => {
    const answeredQuestions = responses.slice(0, currentQuestion + 1).filter(response => response !== null).length;
    setProgress((answeredQuestions / questions.length) * 100);
  };

  useEffect(() => {
    updateProgress(responses, currentQuestion);
  }, [responses, currentQuestion]);

  const handleOptionClick = (index) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = index;
    setResponses(newResponses);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1 && responses[currentQuestion] !== null) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#8fcbd3]">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl h-4/5 w-full">
        <h1 className="text-center text-xl font-bold mb-12 mt-4 text-orange-600">ARE YOU DISILLUSIONED?</h1>
        <ProgressBar progress={progress} />
        <Question question={questions[currentQuestion]} current={currentQuestion + 1} total={questions.length} />
        <OptionSelector
          options={options}
          selectedOption={responses[currentQuestion]}
          handleOptionClick={handleOptionClick}
        />
        <Navigation
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          canGoNext={currentQuestion < questions.length - 1}
          canGoPrevious={currentQuestion > 0}
          isAnswered={responses[currentQuestion] !== null}
        />
      </div>
    </div>
  );
};

export default App;