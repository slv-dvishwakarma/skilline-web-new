import React from "react";
import { ImageBox } from "@/components/core";
export const About = () => {
  const data = {
    image: {
      url: "/image/images/About Us F.jpeg",
      width: 1024,
      height: 1024,
      size: "h-[480px] object-cover"
  },
    title: "About Us",
    description:
      "Welcome to Skilline, the revolutionary and cost-effective gamified edu platform under development. We design innovative, AI-driven training programs for industries like tech, manufacturing and other high growth sectors. Who We Are - Our aim is to be a one stop solution for rural youth, job seekers, corporates and educational institutions focusing on niche resources and skill development.",
    button: {
      label: "Read More",
      links: "/about",
      target: "_self"
    }
    };
  return (
    <div className="md:py-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
