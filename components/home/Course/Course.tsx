"use client";
import {
    Paragraph,
    StoryItem,
    Heading,
    type StoryItemtype,
} from "@/components/core";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";

import React, { useState } from "react";
import { courseData } from "@/components/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { CourseItem, CourseItemtype } from "./CourseItem";

export const Course = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    const data: CourseItemtype[] = courseData as CourseItemtype[];

    return (
        <div className="bg-[#F3F4F6] md:rounded-xl mb-10">
            <div className="container pt-10">
                <div className="flex items-center flex-col md:flex-row">
                    <div className="md:w-[50%] w-full pb-10">
                        <Heading className="mb-5">Courses</Heading>
                        <Paragraph>
                            {`Be a Part of the Skilline Story. Together, we can build a skilled and empowered India. Skilline is committed to supporting learners seeking new opportunities, institutions aiming to improve education quality, and policymakers working to enhance governance effectiveness.`}
                        </Paragraph>
                        <div className="pt-7">
                        <Button asChild={true}>
                            <Link href="/contact-us" target="_self">Enquiry <span className='ml-2'><FaArrowRightLong /></span></Link>
                        </Button>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full relative">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            orientation="vertical"
                            className="w-full "
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                        >
                            <CarouselContent className="-mt-1 h-[400px]">
                                {data.map((item, index) => {
                                    const { course, risk, image, title, cousedescription, link} = item;
                                    return (
                                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                                            <div className="p-1 mb-4">
                                                <CourseItem
                                                    image={image}
                                                    link={link}
                                                    course={course}
                                                    risk={risk}
                                                    title={title}
                                                    cousedescription={cousedescription}
                                                />
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                            <div className="absolute hidden md:flex flex-col right-[-30px]  items-center justify-center h-full top-0 ml-[-120px] gap-2 mt-[-20px]">
                                {/* <CarouselNext className="relative -rotate-90" /> */}
                                <div className="flex flex-col text-slate-500 text-xs py-2 items-center justify-center w-full">
                                    <span>{current}</span> <span>/</span> <span>{count}</span>
                                </div>
                                {/* <CarouselPrevious className="relative -rotate-90" /> */}
                            </div>
                        </Carousel>
                        <div className="pt-1 h-[40%] w-full bg-gradient-to-t  from-[#F3F4F6]  to-transparent bottom-0 left-0 absolute hidden md:block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
