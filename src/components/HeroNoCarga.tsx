import { useEffect, useState } from "react";
import heroBusAppImage from "../assets/HeroCargaNoRealizada.png"; 

const HeroBusApp = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBusAppImage; 
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className=" ">
      <div className="relative">
        {imageLoaded && (
          <img
            src={heroBusAppImage} 
            alt="BusApp Hero"
            className="w-full h-auto lg:h-full object-cover"
          />
        )}
        <div className="absolute inset-0 shadow"></div>
      </div>
    </section>
  );
};

export default HeroBusApp;
