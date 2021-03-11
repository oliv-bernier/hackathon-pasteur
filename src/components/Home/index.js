import React from 'react';

import map from '../../assets/images/map-etage1.png';

import Details from '../Details';

import icons from '../../data/icons';
import data from '../../data/details';

import './style.scss';

const Home = () => (
  <div className="home">
    <div className="home__map">
      <img className="home__map-image" src={map} alt="Carte en coupe du premier étage de Pasteur" />
    </div>
    {icons.map((icon) => (
      <div className="home__icon">
        <img className={`home__icon-image home__icon-image--${icon.class}`} src={icon.image} alt="Icone d'ambiance" />
      </div>
    ))}
    {/* <Details {...data[0]} height={30} /> */}
  </div>
);

export default Home;
