import { blogData } from "@/components/content";
import { CardBox, Heading } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type ItemType = {
  title: string;
  description: string;
  image: string;
  author: string;
  link: { url: string; target: "_blank" | "_self" };
};

export const Blog = () => {
  const data: ItemType[] = blogData as any;
  const limitedData = data.slice(0, 4);
  return (
    <div className="py-[70px] bg-[#F8F8F8]">
      <div className="container space-y-10">
        <Heading className="text-center">News and Updates</Heading>
        <div className="sm:grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-start xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4">
          {limitedData.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <CardBox
                key={index}
                title={title}
                description={description}
                image={image}
                author={item.author}
                link={link}
              />
            );
          })}
        </div>
        <div className="text-center flex justify-center">
          <Link
            href="/blogs"
            className="flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-black shadow hover:bg-gray-200 md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[18px] md:text-[15px]"
          >
            <span>Find out more </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
