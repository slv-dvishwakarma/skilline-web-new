import { ImageBox } from "@/components/core";
import React from "react";

export const Skill_Gap_india = () => {
  return (
    <div className="md:pb-[10px] md:mt-[30px]">
      <ImageBox
        data={{
          image: "/image/images/Skill Gap in India.jpg",
          title: "Skill Gap in India",
          description:
            "India's burgeoning youth population holds the promise of transforming the nation into a global powerhouse and the world's skill capital. With over 65% of its citizens under the age of 35, this energetic and dynamic workforce has the potential to drive India into a new era, led by Gen Z and millennials.",
          additional_description: "However, there are significant concerns about the skill gap prevalent in the workforce, particularly in the manufacturing and service sectors. As technology rapidly evolves and permeates various industries, the skill gap has been widening, affecting both employee productivity and employability. Furthermore, the traditional education system in India has not adequately prepared first-time job seekers to meet industry demands, exacerbating the issue.",
            style: "style-2",
        }}
        type="style-2" 
      />
    </div>
  );
};
