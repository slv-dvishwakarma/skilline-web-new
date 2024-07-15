import { ImageBox } from "@/components/core";
import React from "react";

export const OurVision = () => {
  return (
    <div className=" md:pb-[10px]">
      <ImageBox
        data={{
          image: "/image/images/Our vision.jpg",
          title: "Our Vision",
          description:
            "To skill that one individual of the nation with an equitable opportunity - in sync with their economic, geographical, or linguistic background so that their life becomes not just a mere existence but adds courage for India's needless growth. We need it! We all want to dream of an India in which every person gets employed through their own hard work and becomes part of a self-sufficient, confident, industrious workforce.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  );
};
