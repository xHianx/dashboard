import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useRef } from 'react';

export default function ControlPanel({ setValue }) {

  {/* Variable de estado y función de actualización */ }

  let [selected, setSelected] = useState(-1)

  {/* Variable de referencia a un elemento */ }

  const descriptionRef = useRef<HTMLDivElement>(null);

  {/* Datos de los elementos del Select */ }

  const items = [
    {
      name: "Precipitación",
      description: "Cantidad de agua que cae sobre la superficie en forma de lluvia o nieve, medido en mm.",
    },
    {
      name: "Humedad",
      description: "Proporción de vapor de agua en el aire, indicada en porcentaje.",
    },
    {
      name: "Nubosidad",
      description: "Porcentaje del cielo cubierto por nubes, afecta la luz solar disponible.",
    },
  ];

  let options = items.map((item, key) => <MenuItem key={key} value={key}>{item["name"]}</MenuItem>)

  {/* Manejador de eventos */ }

  const handleChange = (event: SelectChangeEvent) => {

    let idx = parseInt(event.target.value)
    setSelected(idx)
    setValue(idx)

    {/* Modificación de la referencia */ }

    if (descriptionRef.current !== null) {
      descriptionRef.current.innerHTML = (idx >= 0) ? items[idx]["description"] : ""
    }

  };

  {/* JSX */ }

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '5px'
      }}
      elevation={5}
    >

      <Typography mb={2} component="h3" variant="h6" sx={{ color: '#123f77' }}>
        Variables Meteorológicas
      </Typography>

      <Box sx={{ minWidth: 120 }}>

        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Variables</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            label="Variables"
            defaultValue='-1'
            onChange={handleChange}
          >
            <MenuItem key="-1" value="-1" disabled>Seleccione una variable</MenuItem>

            {options}

          </Select>
        </FormControl>

      </Box>
      {/* 
            <Typography mt={2} component="p" color="text.secondary">
                {
                    (selected >= 0) ? items[selected]["description"] : ""
                }
            </Typography> 
      */}

      {/* Muestra la descripción de la variable seleccionada */}
      <Typography ref={descriptionRef} mt={2} component="p" color="text.secondary" />

    </Paper>


  )
}