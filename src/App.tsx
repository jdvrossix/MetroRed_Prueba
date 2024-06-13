import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./components/Hero";
import Inicio from "./pages/Inicio";
import QueEsMetroRed from "./pages/QueEsMetroRed";
import ComoUsarla from "./pages/ComoUsarla";
import CuentaMetroRed from "./pages/CuentaMetroRed";
import Tarjetas from "./pages/Tarjetas";
import Loader from "./components/Loader"; // Importa el componente Loader
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asíncrona (por ejemplo, una petición HTTP)
    setTimeout(() => {
      setLoading(false); // Desactiva el loader después de 3 segundos (simulación)
    }, 3000);
  }, []);

  return (
    <>
      {/* Muestra el Loader si loading es true */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/que-es-metrored" element={<QueEsMetroRed />} />
            <Route path="/que-es-metrored/como-usarla" element={<ComoUsarla />} />
            <Route path="/que-es-metrored/cuenta-metrored" element={<CuentaMetroRed />} />
            <Route path="/medios-pago/tarjetas" element={<Tarjetas />} />
            {/* 
       
       
        <Route path="/medios-pago/pago-qr" exact component={PagoQR} />
        <Route path="/puntos-recarga/listado-puntos" exact component={ListadoPuntos} />
        <Route path="/puntos-recarga/carga-no-realizada" exact component={CargaNoRealizada} />
        <Route path="/puntos-recarga/red-recargas" exact component={RedRecargas} />
        <Route path="/mapa" exact component={Mapa} />
        <Route path="/busapp" exact component={BusApp} /> */}
          </Routes>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
