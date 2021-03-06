import { useState } from 'react';

import Edit from '../../assets/img/Edit.svg';

import LocationStatistics from '../LocationStatistics/LocationStatistics';

const LocationCard = ({
  id,
  locationName,
  userNumber,
  locationTimezone,
  onViewCount,
  showModal,
}) => {
  const [isHover, setHover] = useState(false);
  const [locationViewCount, setViews] = useState(0);

  //handles click on Edit button
  const clickEditHandler = (event) => {
    event.stopPropagation();
    alert(`Edit card number ${id}`);
  };

  //hangles showing/hiding Edit button
  const isHoverHandler = () => {
    setHover(!isHover);
  };

  const clickCardHandler = () => {
    setViews(locationViewCount + 1);
    onViewCount(locationViewCount + 1);
    showModal(id);
  };

  return (
    <div
      className='location-card box-sizing'
      onClick={clickCardHandler}
      onMouseEnter={isHoverHandler}
      onMouseLeave={isHoverHandler}
    >
      <span className='card-heading'>{locationName}</span>

      {isHover ? (
        <span
          className='edit-icon-wrapper box-sizing'
          onClick={clickEditHandler}
        >
          <img src={Edit} className='edit-icon' alt='edit-icon' />
        </span>
      ) : null}

      <div className='card-stats'>
        <LocationStatistics
          userNumber={userNumber}
          locationTimezone={locationTimezone}
          locationViews={locationViewCount}
        />
      </div>
    </div>
  );
};

export default LocationCard;
