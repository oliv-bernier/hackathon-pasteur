import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Details = ({
  mood,
  band,
  track,
  tempo,
  freq,
  image,
  close,
}) => {
  const progressbars = [];
  const [isDisapears, setDisapears] = useState(false);

  for (let i = 0; i < 14; i++) {
    const bar = Math.floor((Math.random() * 100) + 1);
    progressbars.push(
      <div className="details__zoom-analysis-div-bar">
        <div className="details__zoom-analysis-div-progress" style={{ height: `${bar}%` }} />
      </div>,
    );
  }

  const handleClose = () => {
    // setDisapears(true);
    setTimeout(() => {
      close(false);
    }, 50);
  };

  if (mood === 'Silence') {
    return (
      <div className={classNames('details', { 'details--disapears': isDisapears })}>
        <div className="details__close">
          <button type="button" className="details__close-button" onClick={handleClose}>X</button>
        </div>
        <div className="details__zoom">
          <div className="details__zoom-mood">
            <p className="details__zoom-mood-mood">Mood:</p>
            <p className="details__zoom-mood-result">{mood}</p>
          </div>
          <div className="details__zoom-track">
            <p className="details__zoom-track-title">Morceau Similaire :</p>
            <p className="details__zoom-track-band">{band}</p>
            <p className="details__zoom-track-name">{track}</p>
            <img className="details__zoom-track-image" src={image} alt="test" />
          </div>
          <div className="details__zoom-tempo">
            <p className="details__zoom-tempo-title">Tempo : {tempo}</p>
            <p className="details__zoom-tempo-freq">Freq : {freq}</p>
          </div>
          <div className="details__zoom-analysis">
            <p className="details__zoom-analysis-title">Analyse de fréquence :</p>
            <div className="details__zoom-analysis-div" />
            <div className="details__zoom-analysis-details">
              <p>Grave</p>
              <p>Medium</p>
              <p>Aigue</p>
            </div>
          </div>
        </div>
      </div>
    );
  } return (
    <div className={classNames('details', { 'details--disapears': isDisapears })}>
      <div className="details__close">
        <button type="button" className="details__close-button" onClick={handleClose}>X</button>
      </div>
      <div className="details__zoom">
        <div className="details__zoom-mood">
          <p className="details__zoom-mood-mood">Mood:</p>
          <p className="details__zoom-mood-result">{mood}</p>
        </div>
        <div className="details__zoom-track">
          <p className="details__zoom-track-title">Morceau Similaire :</p>
          <p className="details__zoom-track-band">{band}</p>
          <p className="details__zoom-track-name">{track}</p>
          <img className="details__zoom-track-image" src={image} alt="test" />
        </div>
        <div className="details__zoom-tempo">
          <p className="details__zoom-tempo-title">Tempo : {tempo}</p>
          <p className="details__zoom-tempo-freq">Freq : {freq}</p>
        </div>
        <div className="details__zoom-analysis">
          <p className="details__zoom-analysis-title">Analyse de fréquence :</p>
          <div className="details__zoom-analysis-div">
            {progressbars}
          </div>
          <div className="details__zoom-analysis-details">
            <p>Grave</p>
            <p>Medium</p>
            <p>Aigue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  mood: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired,
  track: PropTypes.string.isRequired,
  tempo: PropTypes.any.isRequired,
  freq: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default Details;
