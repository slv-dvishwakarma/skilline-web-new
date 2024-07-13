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
  CallAction,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";
import { States } from "@/components/home/States";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <OurApproach />
      {/* <OurVision /> */}
      <Empowering />
      <CallAction />
      <States />
      <About />
      <OurImpact />
      
      
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
