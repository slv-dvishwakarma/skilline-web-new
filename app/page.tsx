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
  Course,
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
      
      {/* <CallAction /> */}
      <About />
      <States />
      
      {/* <OurImpact /> */}
      <div className="pt-10">
      <Stories />
      </div>
      <Ventures />
      <LearningPlatform />
      
      <GuidingPrinciple />
      {/* <Courses /> */}
      {/* <Pillars /> */}
      
      <Testimonial />
      <div className="pt-10">
      <Course />
      </div>
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
