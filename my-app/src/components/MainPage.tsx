import React, { useState } from 'react';
import { useAppSelector } from '../redux/hook';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/joy';
import '../style.css';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
}

export default function MainPage(): JSX.Element {
  const questions: Question[] = useAppSelector((state) => state.apiSlice.questions);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<
    { answer: string; correct: boolean }[]
  >([]);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      const isCorrect =
        selectedAnswer === questions[currentQuestionIndex].correct_answer;
      setUserAnswers([
        ...userAnswers,
        { answer: selectedAnswer, correct: isCorrect },
      ]);
      setSelectedAnswer('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Please select an answer before submitting.');
    }
  };

  return (
    <div className="container">
      {currentQuestionIndex < questions.length ? (
        <FormControl>
          <FormLabel>{questions[currentQuestionIndex].question}</FormLabel>
          <RadioGroup>
            {questions[currentQuestionIndex].incorrect_answers.map(
              (incorrectAnswer, i) => (
                <Radio
                  key={i}
                  checked={selectedAnswer === incorrectAnswer}
                  onClick={() => handleAnswerSelection(incorrectAnswer)}
                  value={incorrectAnswer}
                  label={incorrectAnswer}
                ></Radio>
              )
            )}
            <Radio
              checked={
                selectedAnswer ===
                questions[currentQuestionIndex].correct_answer
              }
              onClick={() =>
                handleAnswerSelection(
                  questions[currentQuestionIndex].correct_answer
                )
              }
              value={questions[currentQuestionIndex].correct_answer}
              label={questions[currentQuestionIndex].correct_answer}
            ></Radio>
          </RadioGroup>
          <button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
            Submit Answer
          </button>
        </FormControl>
      ) : (
        <div>
          <h2>User Answers:</h2>
          <ul>
            {userAnswers.map(({ answer, correct }, index) => (
              <li key={index}>
                {answer} - {correct ? 'Correct' : 'Incorrect'} -{' '}
                {questions[index].difficulty}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
