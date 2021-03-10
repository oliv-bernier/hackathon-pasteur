import React from 'react';

import map from '../../assets/images/map-etage1.png';
import icon1 from '../../assets/images/aigue-haut.png';
import icon2 from '../../assets/images/aigue-moyen.png';
import icon3 from '../../assets/images/grave-bas.png';
import icon4 from '../../assets/images/medium-bas.png';
import icon5 from '../../assets/images/silence-indefini.png';

import Details from '../Details';

import data from '../../data/details';

import './style.scss';

const Home = () => (
  <div className="home">
    <div className="home__map">
      <img className="home__map-image" src={map} alt="Carte en coupe du premier étage de Pasteur" />
    </div>
    <div className="home__icon">
      <img className="home__icon-image home__icon-image--one" src={icon1} alt="Icone d'ambiance" />
    </div>
    <div className="home__icon">
      <img className="home__icon-image home__icon-image--second" src={icon2} alt="Icone d'ambiance" />
    </div>
    <div className="home__icon">
      <img className="home__icon-image home__icon-image--third" src={icon3} alt="Icone d'ambiance" />
    </div>
    <div className="home__icon">
      <img className="home__icon-image home__icon-image--fourth" src={icon4} alt="Icone d'ambiance" />
    </div>
    <div className="home__icon">
      <img className="home__icon-image home__icon-image--fifth" src={icon5} alt="Icone d'ambiance" />
    </div>
    <Details {...data[0]} />
  </div>
);

export default Home;
