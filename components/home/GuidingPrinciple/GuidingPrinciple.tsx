import { Heading, Paragraph } from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "How It Works",
    description: "Our AI-powered platform tailors learning paths uniquely to each user, ensuring effective education aligned with their individual preferences and pace. It's designed to empower diverse learners, including rural youth and job seekers, supporting Skilline's mission to transform education and skill development in India.",
    image: "/image/images/how-it-works.jpeg",
  };

  return (
    <div className="bg-gray-100 py-5">
      <div className="container "> 
        <div className="sm:grid grid-cols-2 gap-10 items-center md:space-y-0 space-y-5">
          <div className="grid-item col-span-1 relative space-y-5">
            <Heading>{data.title}</Heading>
            <Paragraph className=" font-light  tracking-[_0.4px]">
              {data.description}
            </Paragraph>
            <Button asChild={true}>
              <Link href="/how-it-works">Read More</Link>
            </Button>
          </div>
          <div className="grid-item col-span-1">
            <Image
              className="shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] md:h-[480px] md:object-cover"
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
