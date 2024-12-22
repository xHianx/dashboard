import Grid from '@mui/material/Unstable_Grid2'
import './styles/fonts.css'
import './styles/App.css'
import Indicator from './components/Indicator'
import Summary from './components/Summary'
import BasicTable from './components/BasicTable'
import WeatherChart from './components/WeatherChart'
import ControlPanel from './components/ControlPanel'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InputText from './components/InputText'

function App() {

  {/* Variable de estado y función de actualización */ }

  let [indicators, setIndicators] = useState([])
  let [rowsTable, setRowsTable] = useState([])
  let [dataGraphic, setDataGraphic] = useState([])
  let [tunnel, setTunnel] = useState([])
  let [ciudad, setCiudad] = useState('Guayaquil') 
  let ciudadesDisponibles = ['Guayaquil', 'Salinas', 'Quito'];

  {/* Hook: useEffect */ }

  {/* Función para el efecto secundario a ejecutar y Arreglo de dependencias */ }

  useEffect(() => {
    (async () => {
      try {
        // Recuperar datos del almacenamiento local
        let savedTextXML = localStorage.getItem("openWeatherMap");
        let expiringTime = localStorage.getItem("expiringTime");
        let nowTime = new Date().getTime();
  
        // Verificar si se necesita realizar una nueva solicitud a la API
        const needsUpdate =
          !expiringTime ||
          nowTime > parseInt(expiringTime) ||
          ciudad !== localStorage.getItem("ciudad");
  
        if (needsUpdate) {
          const API_KEY = "2910ee09df49a916cd34d94ffa58f9f4";
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&mode=xml&appid=${API_KEY}`
          );
  
          if (!response.ok) {
            console.error("Error al obtener datos de la API", response.status);
            return;
          }
  
          savedTextXML = await response.text();
  
          // Guardar datos en el almacenamiento local con una hora de expiración
          const delay = 3600000; // 1 hora
          localStorage.setItem("openWeatherMap", savedTextXML);
          localStorage.setItem("expiringTime", (nowTime + delay).toString());
          localStorage.setItem("ciudad", ciudad);
        }
  
        // Analizar XML y actualizar los estados
        if (savedTextXML) {
          const parser = new DOMParser();
          const xml = parser.parseFromString(savedTextXML, "application/xml");
  
          // Extraer datos de indicadores
          const dataToIndicators = [];
          const location = xml.getElementsByTagName("location")[1];
          const name = xml.getElementsByTagName("name")[0]?.innerHTML || "N/A";
          const altitude = location?.getAttribute("altitude") || "N/A";
          const latitude = location?.getAttribute("latitude") || "N/A";
          const longitude = location?.getAttribute("longitude") || "N/A";
  
          dataToIndicators.push(["Ciudad", "Ciudad", name]);
          dataToIndicators.push(["Altitud", "Altitud", altitude]);
          dataToIndicators.push(["Latitud", "Latitud", latitude]);
          dataToIndicators.push(["Longitud", "Longitud", longitude]);
  
          setIndicators(
            dataToIndicators.map((element) => (
              <Indicator
                key={element[0]}
                title={element[0]}
                subtitle={element[1]}
                value={element[2]}
              />
            ))
          );
  
          // Extraer datos para la tabla y el gráfico
          const arrayObjects = Array.from(
            xml.getElementsByTagName("time")
          ).map((timeElement) => ({
            rangeHours:
              timeElement.getAttribute("from").split("T")[1] +
              " - " +
              timeElement.getAttribute("to").split("T")[1],
            windDirection:
              timeElement
                .getElementsByTagName("windDirection")[0]
                .getAttribute("deg") +
              " " +
              timeElement
                .getElementsByTagName("windDirection")[0]
                .getAttribute("code"),
            precipitation:
              timeElement
                .getElementsByTagName("precipitation")[0]
                .getAttribute("probability") || "0%",
            humidity:
              timeElement
                .getElementsByTagName("humidity")[0]
                .getAttribute("value") +
              " " +
              timeElement
                .getElementsByTagName("humidity")[0]
                .getAttribute("unit"),
            clouds:
              timeElement
                .getElementsByTagName("clouds")[0]
                .getAttribute("value") +
              ": " +
              timeElement
                .getElementsByTagName("clouds")[0]
                .getAttribute("all") +
              " " +
              timeElement
                .getElementsByTagName("clouds")[0]
                .getAttribute("unit"),
          }));
  
          setDataGraphic(arrayObjects);
          setRowsTable(arrayObjects.slice(0, 8)); // Muestra solo 8 filas
        }
      } catch (error) {
        console.error("Error al procesar datos de la API:", error);
      }
    })();
  }, [ciudad]);
  
  return (
    <>
      <Grid container 
      sx={{ width: '100%' }}>

        <Grid sm={12} md={12} lg={12} sx={{ padding: 0, margin: 0, width: '100%', position: 'fixed', zIndex: 2 }}>
          <Navbar />
        </Grid>

        <Grid container sm={12} md={12} lg={12} id="summary" sx={{ width: '100%', marginTop: 7, paddingY: 7, alignItems: 'center', justifyContent: 'center', backgroundColor: '#123f77' }}>

          <Grid sm={8} md={9} lg={9} xl={9} sx={{ textAlign: 'left', marginY: 3, padding: 3, color: 'white' }}>
          <h3 id='inicio-title'>{ciudad}, Ecuador</h3>
          <p id='inicio-text'>
            Aquí encontrarás la información más actualizada sobre el clima de {ciudad}, incluyendo temperaturas, condiciones meteorológicas y pronósticos. ¡Mantente informado y planifica tu día con confianza!
          </p>
            <InputText setValue={setCiudad}></InputText>
          </Grid>

          <Grid sm={4} md={3} lg={3} xl={3} sx={{ paddingY: 2, paddingX: 2, display: 'flex', justifyContent: 'center', zIndex: 1 }}>
            <Summary></Summary>
          </Grid>

        </Grid>

        <Grid container lg={12} id="indicators" sx={{ width: '100%', margin: 5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          <Grid xs={12} sm={12} md={12} lg={12} id="title">
            <h2 className='section-title'>Detalles de la Localización</h2>
            <p className='section-text'>
              Los indicadores de localización proporcionan información esencial sobre la ubicación específica dentro de la ciudad de Guayaquil para la que se están mostrando los datos climáticos. Estos indicadores son cruciales para ofrecer una perspectiva precisa y detallada del clima, ya que las condiciones meteorológicas pueden variar significativamente entre diferentes áreas de la ciudad.
            </p>
          </Grid>

          <Grid xs={12} sm={6} md={3} lg={3} sx={{ flexGrow: 1 }}>
            {indicators[0]}
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3} sx={{ flexGrow: 1 }}>
            {indicators[1]}
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3} sx={{ flexGrow: 1 }}>
            {indicators[2]}
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3} sx={{ flexGrow: 1 }}>
            {indicators[3]}
          </Grid>

        </Grid>

        <Grid container xs={12} md={12} lg={12} id="table">

          <Grid xs={12} md={12} lg={12} id="title">
            <h2 className='section-title'>Historial Climático</h2>
            <p className='section-text'>
              Estos indicadores climáticos te ofrecen una visión clara y detallada de las condiciones meteorológicas en Guayaquil, permitiéndote estar siempre preparado y bien informado. Ya sea que necesites saber si llevar un paraguas, qué ropa vestir o simplemente tengas curiosidad por el clima, estos datos te serán de gran ayuda.
            </p>
          </Grid>

          <Grid xs={12} md={12} lg={12} sx={{ marginY: 2 }}>
            {/* 4. Envíe la variable de estado (dataTable) como prop (input) del componente (BasicTable) */}
            <BasicTable rows={rowsTable}></BasicTable>
          </Grid>

        </Grid>

        <Grid container xs={12} md={12} lg={12} id="graphic">
          <Grid xs={12} sm={12} md={12} lg={12} id="title">
            <h2 className='section-title'>Gráfico Climático</h2>
            <p className='section-text'>
              Esta gráfica proporciona una visión integral de las principales variables climáticas que afectan el tiempo en Guayaquil. A través de esta visualización, podrás observar cómo varían la humedad, la precipitación y la nubosidad a lo largo del tiempo, lo que te ayudará a entender mejor las condiciones meteorológicas actuales y planificar tus actividades de manera más efectiva.
            </p>
          </Grid>

          <Grid xs={12} sm={12} md={3} lg={3} id="control-panel" sx={{ marginY: 2 }}>
            <ControlPanel setValue={setTunnel} />
          </Grid>

          <Grid xs={12} sm={12} md={9} lg={9} sx={{ zIndex: 1, marginY: 2 }}>
            <WeatherChart value={tunnel} dataGraphic={dataGraphic}></WeatherChart>
          </Grid>
        </Grid>

      </Grid>

      <Grid sm={12} md={12} lg={12} sx={{ padding: 0, margin: 0, width: '100%' }}>
        <Footer />
      </Grid>

    </>
  )
}

export default App
