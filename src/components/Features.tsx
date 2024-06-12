import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import image from "../assets/img02.png";
import image3 from "../assets/img02.png";
import image4 from "../assets/img01.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: image3,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: image,
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Enlaces de Interés
      </h2>

      <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="grid lg:grid-rows-2 lg:grid-cols-4 gap-8">
        {features.map(({ title, description, image }: FeatureProps, index) => (
          <Card
            key={title}
            className={`${
              index === 0
                ? "lg:col-span-4 lg:flex-row lg:h-auto"
                : "lg:col-span-2 lg:h-auto"
            } flex flex-col lg:flex-row`}
          >
            <CardContent className="flex flex-col lg:flex-row lg:items-center p-0">
              {index === 0 ? (
                <>
                  <div className="relative w-full h-full lg:w-1/2 lg:h-auto">
                    <img
                      src={image}
                      alt="About feature"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="lg:w-1/2 lg:pl-8 space-y-4 flex flex-col justify-center p-4 lg:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-left font-bold text-xl lg:text-2xl">{title}</CardTitle>
                    </CardHeader>
                    <p className="text-sm md:text-base text-left">
                      {description}
                    </p>
                    <Button
                      className="w-20 md:w-24 bg-[#015319] text-white"
                      variant="default"
                    >
                      Ver Más
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className={`lg:w-1/2 h-auto lg:h-full ${index % 2 === 0 ? "lg:order-2" : ""}`}>
                    <img
                      src={image}
                      alt="About feature"
                      className={`w-full h-full object-cover ${index === 0 ? "lg:h-auto" : ""}`}
                      style={{ maxHeight: index === 0 ? "250px" : "auto", maxWidth: "100%" }}
                    />
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-1 lg:pr-8" : "lg:pl-8"} space-y-4 flex flex-col justify-center p-4 lg:p-8`}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-left font-bold text-xl lg:text-2xl">{title}</CardTitle>
                    </CardHeader>
                    <p className="text-sm md:text-base text-left">
                      {description}
                    </p>
                    <Button
                      className="w-20 md:w-24 bg-[#015319] text-white"
                      variant="default"
                    >
                      Ver Más
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
