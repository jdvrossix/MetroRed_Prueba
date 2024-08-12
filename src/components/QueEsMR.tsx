import { Card, CardContent, CardTitle } from "@/components/ui/card";
import image from "../assets/img_05.png"; // Mantén la imagen que quieras utilizar

const feature = {
  title: "Metrored: Una Nueva Forma de Pago en San Luis Potosí",
  description: "Metrored es una revolucionaria modalidad de pago para el transporte en la línea de buses BRT Metrored en San Luis Potosí. Esta plataforma representa una nueva y mejorada manera de pagar los servicios de movilidad para esta línea de transporte, brindando a los usuarios una experiencia moderna y eficaz al realizar sus pagos. Con Metrored, el proceso de pago se simplifica, contribuyendo así a la modernización del sistema de transporte público en la ciudad.",
  image: image,
};

export const QueEsMR = () => {
  return (
    <section id="queesmr" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        MetroRed
      </h2>

      <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
        Metrored es una revolucionaria modalidad de pago que está transformando el sistema de transporte en San Luis Potosí, haciendo que la movilidad sea más eficiente y moderna.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-2/3">
          <Card className="flex flex-col lg:flex-row">
            <CardContent className="lg:w-1/2 p-6 flex flex-col justify-center">
              <CardTitle className="text-center font-bold text-xl lg:text-2xl">
                {feature.title}
              </CardTitle>
              <p className="text-sm md:text-base text-justify mt-4">
                {feature.description}
              </p>
            </CardContent>
            <div className="relative lg:w-1/2">
              <img
                src={feature.image}
                alt="Metrored"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
