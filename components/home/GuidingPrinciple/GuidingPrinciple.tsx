import { Paragraph } from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "How It Works",
    description: "Our AI-powered platform tailors learning paths uniquely to each user, ensuring effective education aligned with their individual preferences and pace. It's designed to empower diverse learners, including rural youth and job seekers, supporting Skilline's mission to transform education and skill development in India.",
    image: "/images/5.png",
  };

  return (
    <div className="bg-gray-100 relative">
      <div className="container ">
        <div className="flex flex-wrap items-center">
          <div className="space-y-9 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full text-center">
            <h2 className="text-[30px] leading-[29px] md:text-[50px] md:leading-[40px]  font-[500]">
              {data.title}
            </h2>
            <Paragraph className=" font-light  tracking-[_0.4px]">
              {data.description}
            </Paragraph>
            <Button asChild={true}>
              <Link href="/how-it-works">Read More</Link>
            </Button>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex xl:pb-0 lg:pb-0 md:pb-0 pb-10">
            <Image
              className="xl:block lg:block md:block hidden absolute w-[30%] right-0"
              src="/images/dotted-wave.png"
              alt={data.title}
              width={1200}
              height={894}
            />
            <Image
              className="float-left relative  pt-10 md:w-[500px] mx-auto w-[50%]"
              // src={data.image}
              src={"/images/5.png"}
              alt={data.title}
              width={1200}
              height={894}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
