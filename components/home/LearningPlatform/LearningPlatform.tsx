import React from "react";
import { ImageBox } from "@/components/core";
export const LearningPlatform = () => {
  const data = {
    image: {
        url: "/image/images/ai based learning platform.jpg",
        width: 1024,
        height: 1024,
        size: "md:h-[480px] object-cover"
    },
    title: "The AI-Based Learning Platform",
    description:
      "Skilline utilizes AI to offer personalized education that meets market demands, ensuring accessibility and affordability. Through tailored learning experiences, the platform empowers learners with skills aligned to current market needs, fostering inclusivity and economic viability in education.",
    button: {
      label: "Read More",
      links: "/ai-based-learning-platform",
      target: "_self"
    }
    };
  return (
    <div className="py-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
