import { ImageBox } from "@/components/core";
import React from "react";

export const OurApproach = () => {
  return (
    <div className="md:pb-[100px] md:mt-[30px]">
      <ImageBox
        data={{
          image: "/image/images/our-approach.jpeg",
          title: "Our Approach",
          description:
            "With the help of AI and gamification, we offer a unique learning journey personalized to each learner's desire and need. Our platform provides high-quality education in multiple Indian languages, considering regional cultures. ",
          additional_description: "With a unique competency-driven model tailored to career experience and confidence, we are new learning technology innovators.",
            style: "style-2",
        }}
        type="style-2" 
      />
    </div>
  );
};
