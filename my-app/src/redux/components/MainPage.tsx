import React, { useState } from 'react';
import { useAppSelector } from '../hook';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function MainPage(): JSX.Element {
  const questions: Question[] = useAppSelector(
    (state) => state.apiSlice.questions
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      {questions?.map((card, index) => (
        <div key={index}>
          <h3>{card.question}</h3>
          <ul>
            {card.incorrect_answers.map((incorrectAnswer, i) => (
              <li key={i}>
                <button onClick={() => handleAnswerSelection(incorrectAnswer)}>
                  {incorrectAnswer}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleAnswerSelection(card.correct_answer)}
              >
                {card.correct_answer}
              </button>
            </li>
          </ul>
        </div>
      ))}
      <button>Submit Answer</button>
    </div>
  );
}
