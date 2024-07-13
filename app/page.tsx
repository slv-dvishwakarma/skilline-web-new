import {
  HeroSlider,
  OurVision,
  OurImpact,
  
  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Ventures,
  Blog,
  Courses,
  Contact,
  HomeContactUs,
  AccordionPageTemplate,
  Empowering,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <OurApproach />
      {/* <OurVision /> */}
      <Empowering />
      <OurImpact />
      <About />
      
      <Policies />
      <GuidingPrinciple />
      <Pillars />
      <Stories />
      <OurRoadmap />
      <Ventures />
      <JoinUs />
      <Courses />
      <HomeContactUs />
      <Blog />
      <AccordionPageTemplate />
      {/* <Contact /> */}
    </main>
  );
}
