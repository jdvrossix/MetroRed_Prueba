import { Card, CardContent, CardTitle } from "@/components/ui/card";
import image from "../assets/img_05.png";
import image3 from "../assets/img_04.png";
import image4 from "../assets/img_03.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Ut elementum non tempor eget egestas odio. Risus blandit neque tellus gravida non nulla nulla. Pretium enim mauris dolor nibh ultricies nec eu pellentesque. Tellus donec eget commodo et gravida ut. Adipiscing consequat diam commodo velit erat commodo. Lorem ipsum dolor sit amet consectetur. Ut elementum non tempor eget egestas odio. Risus blandit neque tellus gravida non nulla nulla. Pretium enim mauris dolor nibh ultricies nec eu pellentesque. Tellus donec eget commodo et gravida ut. Adipiscing consequat diam commodo velit erat commodo.",
    image: image4,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas amet risus orci id tristique. Sed faucibus eget sed quis varius nam. Proin et condimentum turpis in. Lorem ipsum dolor sit amet consectetur. Egestas amet risus orci id tristique. Sed faucibus eget sed quis varius nam. Proin et condimentum turpis in.",
    image: image3,
  },
  {
    title: "Lorem ipsum dalaracc lacus",
    description: "Lorem ipsum dalaracc lacus vel facilisis dolor sit amet consecte tur adipiscing elit semper. Lorem ipsum dalaracc lacus vel facilisis dolor sit amet consecte tur adipiscing elit semper.",
    image: image,
  },
];

export const QueEsMR = () => {
  return (
    <section id="queesmr" className="container py-6 sm:py-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        MetroRed
      </h2>

      <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Tarjeta 1 */}
        <div className="w-full lg:w-2/3">
          <Card className="flex flex-col lg:flex-row">
            <CardContent className="lg:w-1/2 p-6 flex flex-col justify-center">
              <CardTitle className="text-left font-bold text-xl lg:text-2xl">{features[0].title}</CardTitle>
              <p className="text-sm md:text-base text-left mt-4">
                {features[0].description}
              </p>
            </CardContent>
            <div className="relative lg:w-1/2 flex justify-end lg:justify-center">
              <img
                src={features[0].image}
                alt="About feature"
                className="h-64 sm:h-72 md:h-80 lg:h-auto xl:max-h-[400px] object-cover lg:object-none"
              />
            </div>
          </Card>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-full lg:w-1/3">
          <Card className="mb-8">
            <CardContent className="p-6 flex flex-col justify-center">
              <CardTitle className="text-left font-bold text-xl lg:text-2xl">{features[1].title}</CardTitle>
              <p className="text-sm md:text-base text-left mt-4">
                {features[1].description}
              </p>
            </CardContent>
            <div className="relative w-full h-48 lg:h-auto">
              <img
                src={features[1].image}
                alt="About feature"
                className="w-full h-full object-none object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Tarjeta 3 */}
        <div className="w-full lg:w-1/3">
          <Card>
            <CardContent className="p-6 flex flex-col justify-center">
              <CardTitle className="text-left font-bold text-xl lg:text-2xl">{features[2].title}</CardTitle>
              <p className="text-sm md:text-base text-left mt-4">
                {features[2].description}
              </p>
            </CardContent>
            <div className="relative w-full h-48 lg:h-auto">
              <img
                src={features[2].image}
                alt="About feature"
                className="w-full h-full object-none object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
