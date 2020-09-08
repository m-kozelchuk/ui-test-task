import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import './App.css';

const App = () => {

  const [images, setImages] = useState([]);
  const [isFormActive, setIsFormActive] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/images?limit=10')
      .then(res => res.json())
      .then(data => {
        // console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <Gallery images={images} />

      <button 
        className='btn btn--form'
        onClick={() => setIsFormActive(true)}
      >
        Show  the form
      </button>

      <Modal
        isShown={isFormActive}
        setIsShown={setIsFormActive}
        >
        <Form 
          setIsFormActive={setIsFormActive}
        />
      </Modal>
    </div>
  );
}

export default App;
