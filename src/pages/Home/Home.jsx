import {
  Hero,
  About,
  DisruptionHighlight,
  EcosystemPillars,
  FinalCTA,
  ManpowerTech,
  TechnologyServices,
  WhyMarkOne,
  WorkspaceSolutions,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <EcosystemPillars />
      <DisruptionHighlight />
      <ManpowerTech />
      <TechnologyServices />
      <WorkspaceSolutions />
      <WhyMarkOne />
      <FinalCTA />
    </>
  );
};

export default Home;
