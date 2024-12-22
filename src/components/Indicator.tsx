import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Config } from "../interfaces/Config";


export default function Indicator(config: Config) {
  return (
    <Paper
      sx={{
        px: 4,
        py: 5,
        m: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", /* Centrar contenido */
        backgroundColor: '#fefefe',
        borderRadius: '15px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)', /* Más sombra */
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { /* Interactividad */
          transform: 'scale(1.05)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        }
      }}
      elevation={3}
    >

      <Typography component="h2" variant="h6" sx={{ color: '#123f77' }} gutterBottom>
        {config.title}
      </Typography>
      <Typography component="p" variant="h4">
        {config.value.toString()}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {config.subtitle}
      </Typography>
    </Paper>
  );
}
