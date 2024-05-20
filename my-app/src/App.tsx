import React, { useEffect } from 'react';
import { thunkQuestionsLoad } from './redux/questions/createAsyncThunk';
import { useAppDispatch } from './redux/hook';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkQuestionsLoad());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
