import React, { useState } from "react";
<<<<<<< HEAD
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Predict from "../model/Predict";
=======
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
>>>>>>> 292ed944e20d1e9244479eafdf32d4e57ad81515

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
  const [latlng ,setLatlng]=useState({lat:0  , lng:0})
 


  const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
            console.log(e.latlng);
            setLatlng(e.latlng);
        },
    });
    return null;
};
  const mapStyles = {
    width: "100%",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  // Array of circle data with latitude, longitude, and radius
  const circles = [
    { latitude: 51.508, longitude: -0.11, radius: 500 },
    { latitude: 51.518, longitude: -0.12, radius: 800 },
    { latitude: 51.528, longitude: -0.13, radius: 1000 },
    // Add more circles as needed
  ];

  // Function to handle circle click event
  const handleCircleClick = (e, circleData) => {
    const curPos = e.latlng;
    alert(`Clicked on circle with radius ${circleData.radius} at: ${curPos.lat} : ${curPos.lng}`);
  };

  return (
    <div>
      <MapContainer
        center={ [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={mapStyles}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
<<<<<<< HEAD
        <Marker position={[latlng.lat, latlng.lng]}>
          <Popup position={[51.505, -0.09]}>
            <p>hello</p>
          </Popup>
        </Marker>

=======
        
>>>>>>> 292ed944e20d1e9244479eafdf32d4e57ad81515
        {/* Render circles dynamically */}
        {circles.map((circleData, index) => (
          <Circle
            key={index}
            center={[circleData.latitude, circleData.longitude]}
            pathOptions={{
<<<<<<< HEAD
              color: "red",
              fillColor: "#f03",
=======
              color: circleData.radius <= 600 ? 'red' : 'green',
              fillColor: '#f03',
>>>>>>> 292ed944e20d1e9244479eafdf32d4e57ad81515
              fillOpacity: 0.5,
            }}
            radius={circleData.radius}
            eventHandlers={{
              click: (e) => handleCircleClick(e, circleData), // Attach click event handler
            }}
          >
            {/* Attach a Tooltip (popup) */}
            <Tooltip>
              This is a circle with a radius of {circleData.radius} meters.
            </Tooltip>
          </Circle>
        ))}

<LocationFinderDummy />
      </MapContainer>
<<<<<<< HEAD

      <label htmlFor="Latitude">Latitude</label>
      <input
        type="text"
        value={latlng.lat}
      />
      <label htmlFor="longitude">Longitude</label>a
      <input
        type="text"
        value={latlng.lng}
      />
      <Predict latitude={latlng.lat} longitude={latlng.lng}/>
          </div>
=======
    </div>
>>>>>>> 292ed944e20d1e9244479eafdf32d4e57ad81515
  );
};

export default Map;
