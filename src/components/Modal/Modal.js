import Close from '../../assets/img/Close.svg';

import LocationStatistics from '../LocationStatistics/LocationStatistics';

const Modal = ({
  locationViews,
  closeModal,
  isVisible,
  modalData: { name, userCount, createdAt, description },
}) => {
  return (
    <>
      {isVisible ? (
        <div
          className='modal-wrapper'
          onClick={(event) => event.stopPropagation()}
        >
          <div className='modal box-sizing'>
            <header className='modal-header box-sizing'>
              <span className='modal-header-title'>{name} </span>
              <img
                src={Close}
                className='close-modal'
                alt='close'
                onClick={() => closeModal()}
              />
            </header>
            <main className='modal-content box-sizing'>
              <LocationStatistics
                userNumber={userCount}
                locationTimezone={createdAt}
                locationViews={locationViews}
              />
              <div className='modal-description'>
                <span className='modal-description-title'>Descritpion</span>
                <div className='modal-description-content'>{description}</div>
              </div>
            </main>
            <footer className='modal-footer'>
              <button className='done-btn' onClick={() => closeModal()}>
                Done
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
