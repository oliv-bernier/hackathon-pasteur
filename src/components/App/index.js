import React from 'react';

import Home from '../Home';

import './style.scss';

const App = () => (
  <div className="App">
    <Home />
    <div className="App__author">
      <a className="App__author-link" href="https://github.com/oliv-bernier/hackathon-pasteur" target="blank">
        GitHub
      </a>
    </div>
  </div>
);

export default App;
