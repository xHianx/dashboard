import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import InputText from "./InputText";
import LocationMap from "./LocationMap";

export default function CityMapApp() {
  const [selectedCity, setSelectedCity] = useState("Guayaquil");
  const [loading, setLoading] = useState(false);

  const validCities = ["Guayaquil", "Salinas", "Quito"];

  useEffect(() => {
    if (!validCities.includes(selectedCity)) {
      setSelectedCity("Guayaquil");
    } else {
      setLoading(true);
      setTimeout(() => setLoading(false), 500); // Simula un pequeño retraso
    }
  }, [selectedCity]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Selecciona una ciudad
      </Typography>
      <InputText setValue={setSelectedCity} />
      <Box sx={{ marginTop: "20px" }}>
        {loading ? (
          <Typography>Loading map...</Typography>
        ) : (
          <LocationMap city={selectedCity} />
        )}
      </Box>
    </Box>
  );
}
