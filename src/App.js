import React from 'react';
import { Provider } from 'react-redux';
import TodoContainer from './components/TodoContainer';

function App({ store }) {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}

export default App;
