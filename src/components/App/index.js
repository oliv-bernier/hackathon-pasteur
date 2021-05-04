import React, { useState, useEffect } from 'react';

import icons from '../../data/icons';
import data from '../../data/details';
import purpose from '../../data/purpose';

import shuffle from '../../selectors/positioning';

import Home from '../Home';
import Timer from '../Timer';

import './style.scss';

const App = () => {
  const [theIcons, setIcons] = useState([]);
  const [ambiance, setAmbiance] = useState([]);

  useEffect(() => {
    setIcons(icons);
    setAmbiance(data);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(shuffle(icons));
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <Home icons={theIcons} ambiance={ambiance} />
      <Timer />
      <div className="App__purpose">
        {purpose.text}<br />{purpose.text2}
      </div>
      <div className="App__author">
        <a className="App__author-link" href="https://github.com/oliv-bernier/hackathon-pasteur" target="blank">
          GitHub repository
        </a>
      </div>
    </div>
  );
};

export default App;
