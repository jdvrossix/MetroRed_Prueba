import { useEffect, useState } from "react";
import heroImage from "../assets/hero01.png"; 

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage; 
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className=" ">
      <div className="relative">
        {imageLoaded && (
          <img
            src={heroImage} 
            alt="Hero Image"
            className="w-full h-auto lg:h-full object-cover"
          />
        )}
        <div className="absolute inset-0 shadow"></div>
      </div>
    </section>
  );
};
