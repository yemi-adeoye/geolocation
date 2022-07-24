import "./App.css";
import InputLAbelError from "./components/InputLAbelError";
import { useState } from "react";
import Map from "./components/Map";
import axios from "axios";

function App() {
  const ACCESS_TOKEN = 'pk.eyJ1IjoieWhlbW1pIiwiYSI6ImNrb2dtajAxejBldjkydXA3ZnBvejlmYmEifQ.lqixKQsslg4DnVlG4TWDNQ'

  const inititalAddress = { from: "", to: "" };
  const [address, setAddress] = useState(inititalAddress);

  const onAdressChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  const getRoute = async (e) => {
    console.log("...getting route");
    const from = [-84.518641, 39.13427];
    const to = [-84.512023, 39.102779];
    const urlConst = 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic/';
    const urlVar = `${from[0]},${from[1]};${to[0]},${to[1]}?geometries=geojson&access_token=${ACCESS_TOKEN}`;
    console.log(urlConst + urlVar)
    const response = await axios.get(urlConst + urlVar);
    console.log(response)
  };

  return (
    <div className="App">
      <InputLAbelError
        id="from"
        label="From"
        value={address.from}
        onTextChange={onAdressChange}
      />
      <InputLAbelError
        id="to"
        label="To"
        value={address.to}
        onTextChange={onAdressChange}
      />
      <Map />
      <input type="button" onClick={getRoute} value="Go" />
    </div>
  );
}

export default App;
