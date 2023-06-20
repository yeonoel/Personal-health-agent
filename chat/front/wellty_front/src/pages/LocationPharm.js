import React, { useState, useEffect } from 'react';
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/LocationPharm.css';
import 'leaflet/dist/leaflet.css';

// Importer les images d'icônes de marqueurs
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configurer les images d'icônes de marqueurs
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconSize: [25, 41],
    className: 'leaflet-marker-icon'
});

L.Marker.prototype.options.icon = DefaultIcon;

const pharmacies = [
  { name: 'Pharmacie 1', lat: 5.370884833824208, lng: -3.9974774544424365},
  { name: 'Pharmacie 2', lat: 5.382591519527284, lng: -3.9974781653663873},
  { name: 'Pharmacie 3', lat: 5.372368210171978, lng: -3.9107107540984014},
  // Ajouter les autres pharmacies ici
];

const LocationPharm = () => {
  const [position, setPosition] = useState([5.320357, -4.016107]); // Position par défaut (Paris)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="containerPP">
      <MapContainer center={position} zoom={13} className='mapping'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Votre position</Popup>
        </Marker>
        {pharmacies.map((pharmacy, index) => (
          <Marker key={index} position={[pharmacy.lat, pharmacy.lng]}>
            <Popup>{pharmacy.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationPharm;