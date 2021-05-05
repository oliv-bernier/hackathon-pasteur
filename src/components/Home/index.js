import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import map from '../../assets/images/map-etage1.png';

import Details from '../Details';

import './style.scss';

const Home = ({ icons, ambiance }) => {
  document.title = 'Ambiances - Hackathon Pasteur';

  const [isDetails, setDetails] = useState(false);

  const [detailsIndex, setDetailsIndex] = useState('');

  const findDetails = (currentIndex) => (
    setDetailsIndex(currentIndex)
  );

  return (
    <div className="home">
      <div className="home__map">
        <img className="home__map-image" src={map} alt="Carte en coupe du premier étage de Pasteur" />
        {icons.map((icon, index) => (
          <div key={icon.image}>
            <div
              key={icon.image}
              className="home__icon"
              onClick={() => {
                findDetails(index);
                setDetails(true);
              }}
            >
              <img key={icon.image} className={`home__icon-image home__icon-image--${icon.class}`} src={icon.image} alt="Icone d'ambiance" />
            </div>
          </div>
        ))}
      </div>
      {isDetails && (
        <Details {...ambiance[detailsIndex]} close={setDetails} />
      )}
    </div>
  );
};

Home.propTypes = {
  icons: PropTypes.array.isRequired,
  ambiance: PropTypes.array.isRequired,
};

export default Home;
