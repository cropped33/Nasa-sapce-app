import React, { useState } from "react";
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

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
  const [latlng ,setLatlng]=useState({lat:0  , lng:0})
  const [month , setMonth]=useState("");
  const [day , setDay]=useState("");
  const[result  , setResult]=useState("");

 


  const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
            console.log(e.latlng);
            setLatlng(e.latlng);
        },
    });
    // map.addLayer(TileLayer)
    return null;
};
  const mapStyles = {
    width: "100%",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  let circleStyles;
  let circles;

  if(result===2){
 circles = [
      { latitude: latlng.lat, longitude: latlng.lng, radius: 500 },
    ];

    circleStyles={
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
    }
  }else if(result===1){
     circles = [
      { latitude: latlng.lat, longitude: latlng.lng, radius: 100 },
    ];
    circleStyles={
      color: "yellow",
      fillColor: "#f03",
      fillOpacity: 0.2,
    }
  }
  else{
    circles=[];
    circleStyles={}
  }
  // circles = [
  //   { latitude: latlng.lat, longitude: latlng.lng, radius: 500 },
  // ];

  // circleStyles={
  //   color: "red",
  //   fillColor: "#f03",
  //   fillOpacity: 0.5,
  // }


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
        <Marker position={[latlng.lat, latlng.lng]}>
          <Popup position={[51.505, -0.09]}>
            <p>hello</p>
          </Popup>
        </Marker>

        {/* Render circles dynamically */}
        {circles.map((circleData, index) => (
          <Circle
            key={index}
            center={[circleData.latitude, circleData.longitude]}
            pathOptions={circleStyles}
            radius={circleData.radius}
            eventHandlers={{
              click: (e) => handleCircleClick(e, circleData), // Attach click event handler
            }}
          >

          </Circle>
        ))}

<LocationFinderDummy />
      </MapContainer>

      <label htmlFor="Latitude">Latitude</label>
      <input
        type="text"
        value={latlng.lat}
      />
      <label htmlFor="longitude">Longitude</label>
      <input
        type="text"
        value={latlng.lng}
      />
      <label htmlFor="longitude">month</label>
      <input
        type="number"
        value={month}
        onChange={(e)=>setMonth(e.target.value)}
      />
      <label htmlFor="longitude">day</label>a
      <input
        type="number"
        value={day}
        onChange={(e)=>setDay(e.target.value)}

      />
      <Predict latitude={latlng.lat} longitude={latlng.lng} month={month} day={day} setResult={setResult}/>
          </div>
  );
};

export default Map;
