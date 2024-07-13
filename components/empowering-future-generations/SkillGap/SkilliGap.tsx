import React from "react";
import { ImageBox } from "@/components/core";
export const SkilliGap = () => {
  const data = {
    image: "/images/about-us.jpg",
    title: "Transforming Education with AI",
    description:
      "Welcome to Skilline, where we are revolutionizing education through AI-powered learning. Our mission is to democratize access to high-quality, job-guaranteed training in technology, manufacturing, and high-demand sectors, fostering sustainable employment and self-employment for learners across Bharat.",
  };
  return (
    <div className="md:pt-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
