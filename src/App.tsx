import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

import Inicio from "./pages/Inicio";
import QueEsMetroRed from "./pages/QueEsMetroRed";
import ComoUsarla from "./pages/ComoUsarla";
import CuentaMetroRed from "./pages/CuentaMetroRed";
import Tarjetas from "./pages/Tarjetas";
import PagoQR from "./pages/PagoQR";
import ListadoPuntos from "./pages/ListadoPuntos";
import CargaNoRealizada from "./pages/CargaNoRealizada";
import RedRecargas from "./pages/RedRecargas";
import Mapa from "./pages/Mapa";
import BusApp from "./pages/BusApp";
import ContentRegistrar from "./components/ContentRegistrar";
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

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/que-es-metrored" element={<QueEsMetroRed />} />
            <Route path="/que-es-metrored/como-usarla" element={<ComoUsarla />} />
            <Route path="/que-es-metrored/cuenta-metrored" element={<CuentaMetroRed />} />
            <Route path="/medios-pago/tarjetas" element={<Tarjetas />} />
            <Route path="/medios-pago/pago-qr" element={<PagoQR />} /> 
            <Route path="/puntos-recarga/listado-puntos" element={<ListadoPuntos />} />
            <Route path="/puntos-recarga/carga-no-realizada" element={<CargaNoRealizada />} /> 
            <Route path="/puntos-recarga/red-recargas" element={<RedRecargas />} /> 
            <Route path="/mapa" element={<Mapa />} /> 
            <Route path="/busapp" element={<BusApp />} /> 
            <Route path="/registrate" element={<ContentRegistrar />} />

          </Routes>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
