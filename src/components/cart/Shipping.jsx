import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import Popup from 'reactjs-popup';

const Shipping = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const countryData = await Country.getAllCountries();
      setCountries(countryData);
    };
    fetchCountries();
  }, []);

  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);

    const stateData = await State.getStatesOfCountry(countryCode);
    setStates(stateData);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
  };

  const handlePinChange = (e) => {
    const pin = e.target.value;
    setSelectedPin(pin);
  };

  const handleNumberChange = (e) => {
    const number = e.target.value;
    setSelectedNumber(number);
  };

  const handleConfirmClick = (e) => {
    e.preventDefault();
    if (
      !selectedNumber &&
      !selectedPin &&
      !selectedState &&
      !selectedCountry &&
      !states &&
      !countries
    ) {
      setError(true);
    } else {
      setSuccess(true);
    }
  };

  return (
    <section className='shipping'>
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type='text' placeholder='Enter House No.' />
          </div>
          <div>
            <label>City</label>
            <input type='text' placeholder='Enter City' />
          </div>
          <div>
            <label>Country</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value=''>Select Country</option>
              {countries &&
                countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value=''>Select State</option>
              {states &&
                states?.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input
              type='number'
              placeholder='Enter Pincode'
              value={selectedPin}
              onChange={handlePinChange}
            />
          </div>
          <div>
            <label>Telephone number</label>
            <input
              type='number'
              placeholder='Enter telephone number'
              value={selectedNumber}
              onChange={handleNumberChange}
            />
          </div>
          <button type='button' className='link' onClick={handleConfirmClick}>
            Confirm order
          </button>
        </form>

        {error && (
          <div
            style={{
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
            }}
          >
            Please complete all fields before confirming the order.
            <br />
            <button
              type='button'
              className='popup-btn'
              onClick={() => setError(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: 'rgb(156, 0, 60)',
                color: '#fff',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Close
            </button>
          </div>
        )}

        {success && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            }}
          >
            Your order is being processed
            <br />
            <button
              type='button'
              className='popup-btn'
              onClick={() => {
                setSuccess(false);
                navigate('/myorders');
              }}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: 'rgb(156, 0, 60)',
                color: '#fff',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              OK
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default Shipping;
