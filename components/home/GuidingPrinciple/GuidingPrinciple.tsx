import { Heading, Paragraph } from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "How It Works",
    description: "Our platform utilizes AI to create personalized learning pathways, adapting to each learner's style and pace. This ensures maximum engagement and effective learning outcomes. utilse above contents (AI based learning platform)",
    image: "/image/images/How It Works.jpg",
  };

  return (
    <div className="bg-gray-100 py-5">
      <div className="container "> 
        <div className="sm:grid grid-cols-2 gap-10 items-center md:space-y-0 space-y-5">
          <div className="grid-item col-span-1 relative space-y-8 ">
            <Heading>{data.title}</Heading>
            <Paragraph className=" font-light  tracking-[_0.4px]">
              {data.description}
            </Paragraph>
            
            <Button asChild={true}>
              <Link href="/how-it-works">Discover more</Link>
            </Button> 
          </div>
          <div className="grid-item col-span-1">
            <Image
              className="shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] md:h-[400px] md:object-cover"
              // src={data.image}
              src={data.image}
              alt={data.title}
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
