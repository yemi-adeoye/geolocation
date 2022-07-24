import {useState, useRef, useEffect} from 'react'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoieWhlbW1pIiwiYSI6ImNrb2dtajAxejBldjkydXA3ZnBvejlmYmEifQ.lqixKQsslg4DnVlG4TWDNQ'


const Map = () => {
    useEffect(()=>{
        initMap();
    }, []);

    const [longLat, setLongLat] = useState({
        long: -70.9,
        lat: 43.35
    });
    const [zoom, setZoom] = useState(9);

    const initMap = () => {
        const options = {
            container: '',
            style: 'mapbox://styles/mapbox/streets-v11',
            centre: [{...longLat}],
            zoom
        }
        const map = new mapboxgl.Map(options)
    }
  return (
    <div id="map"></div>
  )
}

export default Map