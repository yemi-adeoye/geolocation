import './App.css';
import InputLAbelError from './components/InputLAbelError';
import { useState } from 'react';
import Map from './components/Map';
import axios from 'axios';

function App() {
  const ACCESS_TOKEN =
    'pk.eyJ1IjoieWhlbW1pIiwiYSI6ImNrb2dtajAxejBldjkydXA3ZnBvejlmYmEifQ.lqixKQsslg4DnVlG4TWDNQ';

  const inititalAddress = { from: '', to: '' };
  const [address, setAddress] = useState(inititalAddress);

  const onAdressChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  return (
    <div className='App'>
      <InputLAbelError
        id='from'
        label='From'
        value={address.from}
        onTextChange={onAdressChange}
      />
      <InputLAbelError
        id='to'
        label='To'
        value={address.to}
        onTextChange={onAdressChange}
      />
      <Map />
      <input type='button' onClick={getRoute} value='Go' />
    </div>
  );
}

export default App;
