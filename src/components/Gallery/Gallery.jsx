import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from '../Modal/Modal';
import User from '../User/User';
import './Gallery.styles.scss';

const Gallery = ({ images }) => {

  const [isModalActive, setIsModalActive] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (image) => {
    setIsModalActive(true);
    setActiveImage(image);
  }

  return (
    <div className='gallery'>
      {
        images && images.map(img => (
          <div 
            key={img.id} 
            className='item'
            style={{ backgroundColor: img.color }}
            onClick={() => handleImageClick(img)}
          >
            <LazyLoadImage
              src={`${img.thumbnail_url}.jpg`}
              effect="blur"
              alt={img.alt_description}
            />
            <div className='item__likes'>
              Likes: <span>❤ {img.likes}</span>
            </div>
          </div>
        ))
      }

      <Modal
        isShown={isModalActive}
        setIsShown={setIsModalActive}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        isWide='true'
      >
        {activeImage &&
          <div style={{ height: '100%' }}>
            <User
              img={activeImage}
            />
            <LazyLoadImage
              src={`${activeImage.url}.webp`}
              effect="blur"
              alt={activeImage.alt_description}
            /> 
          </div>
        }
      </Modal>
    </div>
  );
}

export default Gallery;
