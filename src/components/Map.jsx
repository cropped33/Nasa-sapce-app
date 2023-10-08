import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const position = [latitude, longitude];
  const mapStyles = {
    width: '100%',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '5px',
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
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={mapStyles}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render circles dynamically */}
        {circles.map((circleData, index) => (
          <Circle
            key={index}
            center={[circleData.latitude, circleData.longitude]}
            pathOptions={{
              color: circleData.radius <= 600 ? 'red' : 'green',
              fillColor: '#f03',
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
      </MapContainer>
    </div>
  );
};

export default Map;
