import { whyMarkOne } from "@/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyMarkOneCards = () => {
  return (
    <div className="w-full grid gap-7 grid-cols-1 md:grid-cols-4 my-6">
      {whyMarkOne.map(({ id, img, title, desc }) => (
        <div key={title} className="">
          <Card key={id} className="w-full mt-0 pt-0">
            <div className="w-full h-48 overflow-hidden rounded-t-2xl mb-4">
              <img src={img} alt={title} className="w-full" />
            </div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default WhyMarkOneCards;
