import { ImageBox } from "@/components/core";
import React from "react";

export const Empowering = () => {
  return (
    <div className="md:pb-[10px] md:mt-[30px]">
      <ImageBox
        data={{
          image: "/image/images/empowerings.jpg",
          title: "Empowering Future",
          description:
            "Welcome to Skilline, where we are revolutionizing education through AI-powered learning. Our mission is to democratize access to high-quality, job-guaranteed training in technology, manufacturing, and high-demand sectors, fostering sustainable employment and self-employment for learners across Bharat. ",
            style: "style-1",
            button: true
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  );
};
