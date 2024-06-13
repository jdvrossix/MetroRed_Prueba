import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./components/Hero";
import Inicio from "./pages/Inicio";
import QueEsMetroRed from "./pages/QueEsMetroRed";
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
            {/* Agrega más rutas según sea necesario */}
          </Routes>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
