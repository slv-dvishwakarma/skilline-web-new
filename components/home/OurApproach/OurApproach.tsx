import { ImageBox } from "@/components/core";
import React from "react";

export const OurApproach = () => {

  // const data = {
  //   image: {
  //     url: "/image/images/our_approach.jpg",
  //     width: number;
  //     height: number;
  //     size: string;
  //   }
  // }

  return (
    <div className="md:pb-[10px] md:mt-[30px]">
      <ImageBox
        data={{
          image: {
            url: "/image/images/our_approach.jpg",
            width: 1024,
            height: 1024,
            size: "h-[400px] object-cover"
          },
          title: "Our Impact",
          description:
            "Skilline has transformed lives by making people from diverse backgrounds job-ready. Our graduates are employed by leading companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients are also using our skilled professionals in their projects, showcasing the real-world impact and success of our Education programs.",
            style: "style-1",
            button: {
              label: "Discover More",
              links: "/our-impact",
              target: "_blank"
            }
        }}
        type="style-1"
        imageAlign="left"
      />
    </div>
  );
};
