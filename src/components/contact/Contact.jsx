import React, { useState } from 'react';
import { motion } from 'framer-motion';
import burger from '../../assets/burger2.png';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendClick = () => {
    const allFieldsFilled = Object.values(userData).every(
      (field) => field.trim() !== ''
    );

    if (!allFieldsFilled) {
      setError(true);
      return;
    }

    setSuccess(true);
  };

  const dialogStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'rgb(156, 0, 60)',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <section className='contact'>
      <motion.form
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleInputChange}
        />
        <textarea
          name='message'
          placeholder='Message...'
          cols='30'
          rows='10'
          onChange={handleInputChange}
        ></textarea>
        <button type='button' onClick={handleSendClick}>
          Send
        </button>

        {error && (
          <div style={dialogStyle}>
            Please complete all fields before sending.
            <br />
            <button
              type='button'
              onClick={() => setError(false)}
              style={closeButtonStyle}
            >
              Close
            </button>
          </div>
        )}

        {success && (
          <div style={dialogStyle}>
            Thank you for contacting us! We will respond to you as soon as
            possible.
            <br />
            <button
              type='button'
              onClick={() => {
                setSuccess(false);
                navigate('/');
              }}
              style={closeButtonStyle}
            >
              Close
            </button>
          </div>
        )}
      </motion.form>
      <motion.div
        className='formBorder'
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ y: '-100vh', x: '50%', opacity: 0 }}
          animate={{ x: '50%', y: '-50%', opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src={burger} alt='Burger' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
