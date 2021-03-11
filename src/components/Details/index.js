import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Details = ({
  mood,
  band,
  track,
  tempo,
  freq,
  image,
  height,
  close,
}) => {
  const progressbars = [];

  for (let i = 0; i < 14; i++) {
    progressbars.push(
      <div className="details__zoom-analysis-div-bar">
        <div className="details__zoom-analysis-div-progress" style={{ height: `${height}%` }} />
      </div>,
    );
  }

  return (
    <div className="details">
      <button type="button" className="details__close" onClick={() => close(false)}>X</button>
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
  height: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

export default Details;
