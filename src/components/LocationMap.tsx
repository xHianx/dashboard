import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

export default function LocationMap({ city }: LocationMapProps) {
  const center = cityCoordinates[city] || cityCoordinates.Guayaquil;

  return (
    <MapContainer
      center={[center.lat, center.lng] as [number, number]} // Aseguramos el tipo
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />

      <Marker position={[center.lat, center.lng] as [number, number]} icon={icon as L.Icon}>
          <Popup>
            <strong>{city}</strong>
            <br />
            Coordenadas: {center.lat}, {center.lng}
          </Popup>
        </Marker>
    </MapContainer>
  );
}
