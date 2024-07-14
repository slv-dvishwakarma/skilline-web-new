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
  Testimonial,
  LearningPlatform,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";
import { HomePartnershipsLogos } from "@/components/home/HomePartnershipsLogos";
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
      {/* <OurImpact /> */}
      <Stories />
      <Ventures />
      <LearningPlatform />
      
      <GuidingPrinciple />
      <Courses />
      {/* <Pillars /> */}
      <Testimonial />
      <HomePartnershipsLogos />
      <Blog />
      <OurRoadmap />
      <HomeContactUs />
      <JoinUs />
      <AccordionPageTemplate />
      {/* <Contact /> */}
    </main>
  );
}
