import Close from '../../assets/img/Close.svg';

import LocationStatistics from '../LocationStatistics/LocationStatistics';

const Modal = (props) => {
  return (
    <>
      {props.isVisible ? (
        <div
          className='modal-wrapper'
          onClick={(event) => event.stopPropagation()}
        >
          <div className='modal box-sizing'>
            <header className='modal-header box-sizing'>
              <span className='modal-header-title'>
                {props.modalData.name}{' '}
              </span>
              <img
                src={Close}
                className='close-modal'
                alt='close'
                onClick={() => props.closeModal()}
              />
            </header>
            <main className='modal-content box-sizing'>
              <LocationStatistics
                userNumber={props.modalData.userCount}
                locationTimezone={props.modalData.createdAt}
                locationViews={props.locationViews}
              />
              <div className='modal-description'>
                <span className='modal-description-title'>Descritpion</span>
                <div className='modal-description-content'>
                  {props.modalData.description}
                </div>
              </div>
            </main>
            <footer className='modal-footer'>
              <button className='done-btn' onClick={() => props.closeModal()}>
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
