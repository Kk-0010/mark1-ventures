import { Link } from "react-router-dom";
import { Button } from "..";
import { pillars } from "@/constants";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EcosystemPillars = () => {
  return (
    <section className="bg-white max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-16 lg:py-20">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug mb-5">
        Ecosystem Pillars
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-10 lg:gap-20 overflow-hidden">
        {/* Pillars points */}
        <div className="w-full grid gap-7 grid-cols-1 md:grid-cols-3">
          {pillars.map(({ id, title, desc, Icon, cta }) => (
            <Card key={id}>
              <CardHeader>
                <Icon className="size-10 mb-1" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={cta.href}>
                  <Button type={cta.type} size="lg" label={cta.label} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemPillars;
