import React from 'react';
import { Provider } from 'react-redux'

import Navbar from './components/Navbar/index'
import Home from './container/Home/index'

import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <main>
            <Home />
        </main>
      </Provider>
    </div>
  );
}

export default App;
