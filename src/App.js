import './App.css';
import InputLAbelError from './components/InputLAbelError';
import { useState } from 'react';
import Map from './components/Map';

function App() {
  

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
    </div>
  );
}

export default App;
