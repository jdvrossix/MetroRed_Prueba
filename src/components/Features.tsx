import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import image from "../assets/busapp.png"; // Cambia por la imagen correspondiente
import image3 from "../assets/img_03.png"; // Cambia por la imagen correspondiente
import image4 from "../assets/img01.png"; // Cambia por la imagen correspondiente

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const features: FeatureProps[] = [
  {
    title: "¿Qué es MetroRed?",
    description: "MetroRed es una revolucionaria modalidad de pago para el transporte en la línea de buses BRT Metrored en San Luis Potosí. Esta plataforma brinda a los usuarios una experiencia moderna y eficaz al realizar sus pagos.",
    image: image4,
    href: "/que-es-metrored",
  },
  {
    title: "Listado de puntos de recarga",
    description: "Consulta el listado de puntos de recarga disponibles para cargar tu tarjeta fácilmente y sin complicaciones. Encuentra la ubicación más cercana para mantenerte siempre listo para viajar.",
    image: image3,
    href: "/puntos-recarga/listado-puntos",
  },
  {
    title: "BusApp",
    description: "Conoce nuestra aplicación BusApp, diseñada para gestionar tus recargas y facilitar la planificación de tus viajes. Lleva el control de tus movimientos en la palma de tu mano.",
    image: image,
    href: "/busapp",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">Enlaces de Interés</h2>

      <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
        Explora nuestros enlaces de interés para obtener más información sobre nuestros servicios y cómo pueden ayudarte en tus viajes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, description, image, href }: FeatureProps) => (
          <Card key={title} className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover" // Imagen con altura fija y cubierta sin deformarse
            />
            <CardContent className="flex flex-col justify-between p-4 flex-grow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
              </CardHeader>
              <p className="text-sm md:text-base mb-4 flex-grow text-justify">{description}</p>
              <Link
                to={href}
                className="bg-[#015319] text-white flex items-center justify-center h-10 rounded-md text-center hover:bg-[#013d16] transition duration-300"
              >
                Ver Más
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
