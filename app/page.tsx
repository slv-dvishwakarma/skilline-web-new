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
  Regionallanguages,
  OurStory,
  RoadMap,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";
import { HomePartnershipsLogos } from "@/components/home/HomePartnershipsLogos";
import { States } from "@/components/home/States";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Regionallanguages />
      <OurApproach />
      {/* <OurVision /> */}
      <States />
      <About />
      <OurStory />
      <div className="pt-[30px]">
      <Ventures />
      </div>
      <LearningPlatform />
      <GuidingPrinciple />
      <div className="pt-10">
      <Course />
      </div>
      <Testimonial />
      <Empowering />
      
      <div className="pt-10">
      <Stories />
      </div>
    <div className="xl:block lg:block md:block hidden">
    <RoadMap />
    </div>
      <div className="xl:hidden lg:hidden md:hidden block">
      <OurRoadmap />
      </div>
      
      
      <HomePartnershipsLogos />
      <Blog />
      
      <HomeContactUs />
      <JoinUs />
      
      <AccordionPageTemplate />
      {/* <Contact /> */}
    </main>
  );
}
