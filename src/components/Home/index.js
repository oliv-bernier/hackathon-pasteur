import React, { useState } from 'react';

import map from '../../assets/images/map-etage1.png';

import Details from '../Details';

import icons from '../../data/icons';
import data from '../../data/details';

import './style.scss';

const Home = () => {
  const [isDetails, setDetails] = useState(false);

  const [detailsIndex, setDetailsIndex] = useState('');

  const findDetails = (currentIndex) => (
    setDetailsIndex(currentIndex)
  );

  console.log(detailsIndex);

  return (
    <div className="home">
      <div className="home__map">
        <img className="home__map-image" src={map} alt="Carte en coupe du premier étage de Pasteur" />
        {icons.map((icon, index) => (
          <div>
            <div
              className="home__icon"
              onClick={() => {
                findDetails(index);
                setDetails(true);
              }}
            >
              <img key={icon.mood} className={`home__icon-image home__icon-image--${icon.class}`} src={icon.image} alt="Icone d'ambiance" />
            </div>
            {isDetails && (
              <Details {...data[detailsIndex]} close={setDetails} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
