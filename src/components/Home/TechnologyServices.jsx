import { Button } from "..";
import { techServices } from "@/constants";
import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TechnologyServices = () => {
  return (
    <section className="bg-white max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-16 lg:py-20">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug mb-5">
        Technology Services
      </h2>
      <div className="flex flex-col items-center">
        {/* Services cards */}
        <div className="w-full grid gap-7 grid-cols-1 md:grid-cols-4 mb-6">
          {techServices.items.map(({ id, title, desc, Icon }) => (
            <Card key={id}>
              <CardHeader>
                <Icon className="size-10 mb-1" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <Link to={techServices.cta.href}>
          <Button
            type={techServices.cta.type}
            size="lg"
            label={techServices.cta.label}
            buttonClassName="w-fit"
          />
        </Link>
      </div>
    </section>
  );
};

export default TechnologyServices;
