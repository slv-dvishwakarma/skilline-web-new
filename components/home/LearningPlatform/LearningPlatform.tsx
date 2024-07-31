import React from "react";
import { ImageBox } from "@/components/core";
export const LearningPlatform = () => {
  const data = {
    image: {
        url: "/image/images/ai based learning platform.jpg",
        width: 1024,
        height: 1024,
        size: "md:h-[400px] object-cover"
    },
    title: "SKILLINE- The AI-Based Learning Platform",
    description:
      "Skilline's AI-based self-learning platform offers personalized education that meets market demands, ensuring accessibility and affordability for all",
    button: {
      label: "Reveal More",
      links: "/policies",
      target: "_self"
    }
    };
  return (
    <div className="py-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
