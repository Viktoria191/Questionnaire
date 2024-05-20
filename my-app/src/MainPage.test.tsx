import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './components/MainPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('MainPage component', () => {
  test('renders questions and handles answer submission', () => {
    const mockQuestions = [
      {
        question: 'What is the capital of France?',
        correct_answer: 'Paris',
        incorrect_answers: ['Berlin', 'Madrid', 'Rome'],
        difficulty: 'easy',
      },
    ];

    jest.mock('../redux/hook', () => ({
      useAppSelector: () => mockQuestions,
    }));

    const { getByTestId, getByLabelText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });
});
