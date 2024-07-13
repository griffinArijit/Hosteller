import "./map.scss"
import { useRef } from "react";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

export default function Map({items}){
    const position = [51.505, -0.09];
    const mapRef= useRef(null);
    return (
        <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="map" ref={mapRef}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map((item)=> <Pin key={item.id} items={item}/>)}
  </MapContainer>
    );
}