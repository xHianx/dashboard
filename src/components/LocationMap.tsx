import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

interface LocationMapProps {
  city: string;
}

const cityCoordinates = {
  Guayaquil: { lat: -2.1894, lng: -79.8891 },
  Salinas: { lat: -2.2137, lng: -80.9684 },
  Quito: { lat: -0.1807, lng: -78.4678 },
};

function MapUpdater({ city }: { city: string }) {
  const map = useMap();
  const center = cityCoordinates[city] || cityCoordinates.Guayaquil;

  useEffect(() => {
    map.setView([center.lat, center.lng], 13); // Actualiza la vista del mapa
  }, [city, map]);

  return null; // Este componente solo se usa para actualizar el mapa
}

export default function LocationMap({ city }: LocationMapProps) {
  const center = cityCoordinates[city] || cityCoordinates.Guayaquil;

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "10px",
        position: "relative", // Se mantiene dentro del flujo del diseño
        zIndex: 0, // Asegura que no sobrepase otros elementos
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />
      <MapUpdater city={city} /> {/* Este componente actualiza la vista */}
      <Marker position={[center.lat, center.lng]} icon={icon}>
        <Popup>
          <strong>{city}</strong>
          <br />
          Coordenadas: {center.lat}, {center.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
