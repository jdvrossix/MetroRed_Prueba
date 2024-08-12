import mrLogo from "../assets/mr_logo.png";
import emailIcon from "../assets/IconMail.png";
import phoneIcon from "../assets/IconPhone.png";
import backgroundTexture from "../assets/textura01.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="relative">
      <hr className="w-11/12 mx-auto" />

      {/* Fondo con opacidad */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          opacity: "0.15",
        }}
      ></div>

      <section className="container py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Columna 1: MetroRed Logo */}
        <div className="flex items-center justify-center md:justify-start xl:justify-start col-span-1">
          <Link to="/">
            <img src={mrLogo} alt="MetroRed Logo" className="h-8 mr-2" />
          </Link>
        </div>

        {/* Columna 2: Qué es MetroRed */}
        <div className="flex flex-col gap-2 md:col-span-1 xl:col-span-1 md:col-start-2 xl:col-start-2">
          <h3 className="font-bold text-lg">Qué es MetroRed</h3>
          <div>
            <Link
              to="/que-es-metrored/cuenta-metrored"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Cuenta MetroRed
            </Link>
          </div>
        </div>

        {/* Columna 3: Medios de Pago */}
        <div className="flex flex-col gap-2 md:col-span-1 xl:col-span-1">
          <h3 className="font-bold text-lg">Medios de Pago</h3>
          <div>
            <Link
              to="/medios-pago/tarjetas"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Tarjetas
            </Link>
          </div>
          <div>
            <Link
              to="/medios-pago/pago-qr"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Pago con QR
            </Link>
          </div>
        </div>

        {/* Columna 4: Puntos de Recarga */}
        <div className="flex flex-col gap-2 md:col-span-1 xl:col-span-1">
          <h3 className="font-bold text-lg">Puntos de Recarga</h3>
          <div>
            <Link
              to="/puntos-recarga/listado-puntos"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Listado de puntos de recargas
            </Link>
          </div>
          <div>
            <Link
              to="/puntos-recarga/carga-no-realizada"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Qué hago si mi recarga no se realizó
            </Link>
          </div>
        </div>

        {/* Columna 5: Contáctanos */}
        <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-1">
          <h3 className="font-bold text-lg">Contáctanos</h3>
          <div className="flex items-center gap-2">
            <img src={emailIcon} alt="Email Icon" className="h-12" />
            <div>
              <p className="text-sm">Correo Electrónico</p>
              <p className="text-sm font-semibold">atención@sctslp.gob.mx</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={phoneIcon} alt="Phone Icon" className="h-12" />
            <div>
              <p className="text-sm">Teléfono</p>
              <p className="text-sm font-semibold">(444) 812.06.77</p>
            </div>
          </div>
        </div>
      </section>

      {/* Línea separadora horizontal */}
      <hr className="w-full border-t-1 border-gray-700 my-8" />

      {/* Texto de derechos reservados */}
      <section className="container pb-6 text-center">
        <p className="text-sm text-gray-600">
          Todos los derechos reservados - &copy; 2024 MetroRed
        </p>
      </section>
    </footer>
  );
};
