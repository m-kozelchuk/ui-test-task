import React from 'react';
import './Modal.styles.scss';

const Modal = ({ children, isShown, setIsShown, isWide = false, activeImage, setActiveImage }) => {

  const classList = new Set([
    'modal-wrap',
    isShown ? 'modal-wrap--active' : '',
    isWide ? 'modal-wrap--wide' : '',
  ]);

  const handleCloseModal = () => {
    setIsShown(false);
    activeImage && setActiveImage(null);
  }

  return (
    <div className={Array.from(classList).join(' ')}>
      <div
        className="overlay"
        onClick={() => handleCloseModal()}
      />
      <div className="modal">
        <div 
          className="modal__close" 
          onClick={() => handleCloseModal()}
        />
        <div className="modal__content">
          { children }
        </div>
      </div>
    </div>
  );
}

export default Modal;
