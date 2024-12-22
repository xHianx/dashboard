import { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';

import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface InputTextProps {
  setValue: (value: string) => void;
}

function InputText({ setValue }: InputTextProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="city-select-label">Selecciona una ciudad</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
        defaultValue="Guayaquil"
        onChange={(event) => setValue(event.target.value)}
        sx={{
          backgroundColor: "#e0e0e0", // Gris claro
          color: "#1D3557", // Texto azul oscuro
          "&:hover": {
            backgroundColor: "#d6d6d6", // Gris más claro al pasar el mouse
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1D3557", // Color del borde
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1D3557", // Color del borde al enfocar
          },
        }}
      >
        <MenuItem value="Guayaquil">Guayaquil</MenuItem>
        <MenuItem value="Salinas">Salinas</MenuItem>
        <MenuItem value="Quito">Quito</MenuItem>
      </Select>
    </FormControl>
  );
}

export default InputText;
