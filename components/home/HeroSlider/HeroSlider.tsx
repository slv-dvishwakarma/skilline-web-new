"use client";

import React from "react";
import { Slider, SliderItemType } from "@/components/core";

export const HeroSlider = () => {
  const sliderData: SliderItemType[] = [
    {
      preTitle: "",
      title: "Empowering India's Future",
      description: `Skilline aims to revolutionize Bharat's education landscape with an affordable, AI-driven platform.`,
      image: {
        src: "/image/images/slider-5.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Atma Nirbhar Bharat",
      description: `Narrowing skill gaps, empowering rural youth, and advancing 'Aatmanirbhar Bharat' objectives.`,

      image: {
        src: "/revision/slider_2.png",
        width: 630,
        height: 456,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Industry Ready Skills",
      description: `Creating 100% job-guaranteed training courses in technology, manufacturing, and high-demand sectors.`,
      image: {
        src: "/image/images/Industry Ready skill.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Empowering Individual Potential",
      description: `Our vision is to cultivate personalized learning experiences that unleash individual potential, fostering nationwide prosperity and growth.`,
      image: {
        src: "/image/images/empowering-india-fututre.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
  ];

  return <Slider data={sliderData} />;
};
