import React, { useEffect } from 'react';
import { thunkQuestionsLoad } from './redux/questions/createAsyncThunk';
import { useAppDispatch } from './redux/hook';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkQuestionsLoad());
  }, []);
  return <div className="App">A</div>;
}

export default App;
