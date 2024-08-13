import { Card, CardContent } from "@/components/ui/card";
import image from "../assets/img08.png"; 
import HeroCargaNoRealizada from "../components/HeroNoCarga"; 

const CargaNoRealizada = () => {
  const feature = {
    title: "¿Qué Hago si mi Carga no se Realizó?",
    description: "Si tu carga no se realizó correctamente, no te preocupes. Contáctanos al teléfono (444) 812.06.77 o envía una solicitud de soporte al correo atención@sctslp.gob.mx. Estamos comprometidos a resolver cualquier inconveniente que puedas tener y garantizar una experiencia sin complicaciones con MetroRed.",
    image: image,
  };

  return (
    <>
    <HeroCargaNoRealizada /> 
  
    <section id="carga-no-realizada" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        {feature.title}
      </h2>

      <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
      ¿Tienes problemas con tu recarga? ¡No te preocupes! Estamos aquí para ayudarte a resolver cualquier inconveniente que puedas tener con MetroRed de manera rápida y eficiente.      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-2/3">
          <Card className="flex flex-col lg:flex-row h-full">
            <CardContent className="lg:w-1/2 p-6 flex flex-col justify-center">
              <p className="text-sm md:text-base text-justify mt-4">
                {feature.description}
              </p>
            </CardContent>
            <div className="relative lg:w-1/2 h-full">
              <img
                src={feature.image}
                alt="Asistencia en caso de recarga fallida"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
};

export default CargaNoRealizada;
