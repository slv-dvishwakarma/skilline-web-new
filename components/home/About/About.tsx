import React from "react";
import { ImageBoxStyle } from "@/components/core";
export const About = () => {
  const json = {
    data: {
      image: {
        url: "/image/images/About Us.jpg",
        width: 1024,
        height: 1024,
        size: ""
      },
      title: "About Us",
      description: `Welcome to Skilline, the revolutionary and cost-effective gamified edu platform under development. We design innovative, AI-driven training programs for industries like tech, manufacturing and other high growth sectors. Who We Are - Our aim is to be a one stop solution for rural youth, job seekers, corporates and educational institutions focusing on niche resources and skill development.`,
      button: {
        label: "Get the full Story",
        url: "/about",
        target: "_self" as "_self",
      }
    },
    imageAlign: "right" as "right",
  };
  return (
    <>
      <div className="md:pb-[10px] md:mt-[30px]">
       <ImageBoxStyle 
       data={json.data} imageAlign={json.imageAlign}
       />
      </div>
    </>
  );
};
