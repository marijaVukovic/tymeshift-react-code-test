import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../Modal/Modal';
import Notification from '../UI/Notification';
import LocationCard from './LocationCard';

import { fetchLocationsData } from '../../store/locations-slice';

const LocationCardsWrapper = () => {
  const dispatch = useDispatch();
  const locationsList = useSelector((state) => state.locations);
  const notification = useSelector((state) => state.locations.notification);
  const [isVisible, setModal] = useState(false);
  const [locationView, setLocationView] = useState(0);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    dispatch(fetchLocationsData());
  }, [dispatch]);

  const showModalHandler = (cardID) => {
    setModal(!isVisible);
    filterData(cardID);
  };

  const closeModalHandler = () => {
    setModal(!isVisible);
  };

  const filterData = (cardID) => {
    let modalData = locationsList.locations.find((item) => item.id === cardID);
    setModalData(modalData);
  };

  const onViewCountHandler = (locationViewCount) => {
    setLocationView(locationViewCount);
  };

  return (
    <div className='wrapper'>
      {notification && (
        <Notification
          message={notification.message}
          title={notification.title}
        />
      )}
      {!notification && locationsList.isLoading ? (
        <p className='notification-message'>Loading...</p>
      ) : (
        locationsList.locations.map((locationItem) => (
          <LocationCard
            key={locationItem.id}
            id={locationItem.id}
            locationName={locationItem.name}
            userNumber={locationItem.userCount}
            locationTimezone={locationItem.createdAt}
            showModal={showModalHandler}
            isVisible={isVisible}
            onViewCount={onViewCountHandler}
          />
        ))
      )}

      {modalData ? (
        <Modal
          isVisible={isVisible}
          closeModal={closeModalHandler}
          locationViews={locationView}
          modalData={modalData}
        />
      ) : null}
    </div>
  );
};

export default LocationCardsWrapper;
