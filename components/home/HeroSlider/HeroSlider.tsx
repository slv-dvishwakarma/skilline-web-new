"use client";

import React from "react";
import { Slider, SliderItemType } from "@/components/core";

export const HeroSlider = () => {
  const sliderData: SliderItemType[] = [
    {
      preTitle: "Envisioning the future",
      title: "Empowering India's Future",
      description: `Skilline aims to revolutionize Bharat's education landscape with an affordable, AI-driven platform`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/image/Slider/1.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Atmanirbhar \n Bhrat",
      description: `Narrowing skill gaps, empowering rural youth, and advancing 'Aatmanirbhar Bharat' objectives.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/image/Slider/2.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Industry \n Ready Skills",
      description: `Creating 100% job-guaranteed training courses in technology, manufacturing, and high-demand sectors`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/image/Slider/3.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Empowering Individual Potential",
      description: `Our vision is to cultivate personalized learning experiences that unleash individual potential, fostering nationwide prosperity and growth`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-5.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
  ];

  return <Slider data={sliderData} />;
};
