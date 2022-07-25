import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoieWhlbW1pIiwiYSI6ImNrb2dtajAxejBldjkydXA3ZnBvejlmYmEifQ.lqixKQsslg4DnVlG4TWDNQ';

const Map = () => {
  const container = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    initMap();
  }, []);

  const [longLat, setLongLat] = useState({
    long: -122.662323,
    lat: 45.523751,
  });

  const [zoom, setZoom] = useState(10);

  const initMap = () => {
    const options = {
      container: container.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      centre: [longLat.long, longLat.lat],
      zoom,
    };

    map.current = new mapboxgl.Map(options);

    const bounds = [
      [-123.069003, 45.395273],
      [-122.303707, 45.612333],
    ];

    map.current.setMaxBounds(bounds);
  };

  const getRoute = async (e) => {
    console.log('...getting route');
    const from = [-84.518641, 39.13427];
    const to = [-84.512023, 39.102779];
    const urlConst =
      'https://api.mapbox.com/directions/v5/mapbox/driving-traffic/';
    const urlVar = `${from[0]},${from[1]};${to[0]},${to[1]}?geometries=geojson&access_token=${ACCESS_TOKEN}`;
    console.log(urlConst + urlVar);
    const response = await axios.get(urlConst + urlVar);
    const json = await response.json();
    const data = json.routes[0];
    const route = data.geometry.coordinate;
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route,
      },
    };

    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson,
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75,
        },
      });
    }
    // add turn instructions here at the end

    console.log(response);
  };
  return (
    <div>
      <div ref={container} id='map' style={{ height: '400px' }} />
    </div>
  );
};

export default Map;
