import { MapContainer, TileLayer } from "react-leaflet";
import Coordinates from "../interface/Coordinates";

export default function LocationMap({ center, zoom }: Coordinates) {
  return (
    <div className="de">
    <MapContainer
      key={`${center[0]}-${center[1]}-${zoom}`} // Clave única para re-render
      center={center}
      zoom={zoom}
      style={{ height: "50vh", width: "85%" }}
    >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    />

    </MapContainer>
    </div>
  );
}
