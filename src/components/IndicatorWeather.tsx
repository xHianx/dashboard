
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';    

interface Indicator {
    title?: string;
    subtitle?: string;
    value?: string;
}

export default function IndicatorWeather(config: Indicator) {
    return (
        <div className="IndicatorWeather">
        <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography component="h2" variant="h6" 
                        color="primary" gutterBottom>
                {config.title} 
            </Typography>
            <Typography component="p" variant="h4">
                {config.value}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {config.subtitle}
            </Typography>
        </Paper> 
        </div>
    )
}