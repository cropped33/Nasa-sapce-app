import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = () => {

  const [longitude , setLongitude]=useState("");
  const [latitude , setLatitude]=useState("");

  const position = [latitude, longitude];
  <div className="0"></div>
  const mapStyles = {
    width: '100%',      // Set the width to 100% of the parent container
    height: '500px',    // Set the height as needed
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  return (
    
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={mapStyles}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <label htmlFor="Latitude">Latitude</label>
      <input type="text" 
         value={latitude}
         onChange={(e)=>setLatitude(e.target.value)}
      />
      <label htmlFor="longitude">longitude</label>
      <input type="text" 
       value={longitude}
       onChange={(e)=>setLongitude(e.target.value)}/>
    </div>
  );
};

export default Map;
