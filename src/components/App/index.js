import React, { useState, useEffect } from 'react';

import icons from '../../data/icons';
import data from '../../data/details';

import Home from '../Home';
import Timer from '../Timer';

import './style.scss';

const App = () => {
  const [theIcons, setIcons] = useState([]);
  const [ambiance, setAmbiance] = useState([]);

  const iconsClasses = [
    'one',
    'second',
    'third',
    'fourth',
    'fifth',
  ];

  useEffect(() => {
    setIcons(icons);
    setAmbiance(data);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = iconsClasses
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

      const shuffledIcons = icons.map((icon, index) => {
        icon.class = shuffled[index];
        return icons;
      });

      setIcons(shuffledIcons);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Home icons={theIcons} ambiance={ambiance} />
      <Timer />
      <div className="App__author">
        <a className="App__author-link" href="https://github.com/oliv-bernier/hackathon-pasteur" target="blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
