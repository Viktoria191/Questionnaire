import React, { useState } from 'react';
import { useAppSelector } from '../hook';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/joy';

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
        <FormControl key={index}>
          <FormLabel>{card.question}</FormLabel>
          <RadioGroup>
            {card.incorrect_answers.map((incorrectAnswer, i) => (
              <Radio
                key={i}
                checked={selectedAnswer === incorrectAnswer}
                onClick={() => handleAnswerSelection(incorrectAnswer)}
                value={incorrectAnswer}
                label={incorrectAnswer}
              ></Radio>
            ))}
            <Radio
              checked={selectedAnswer === card.correct_answer}
              onClick={() => handleAnswerSelection(card.correct_answer)}
              value={card.correct_answer}
              label={card.correct_answer}
            ></Radio>
          </RadioGroup>
        </FormControl>
      ))}
      <button>Submit Answer</button>
    </div>
  );
}