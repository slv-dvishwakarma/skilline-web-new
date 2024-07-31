import { Heading, Paragraph, TeamCard } from "@/components/core";
import Image from "next/image";
import React from "react";

export const Ventures = () => {
  const data = [
    {
      src: "/image/teams/nishant-saxena.jpg",
      name: "Nishant Saxena",
      profession: "CEO- IT Consultant- Software Developer",
      role: "CEO",
      experence: "20+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/nishantasaxena/",
        },
      ],
    },
    {
      src: "/image/teams/hansi-malhotra.jpeg",
      name: "Hansi Malhotra ",
      profession: "Advisory- Fintech- Entrepreneurship-Climate Professional",
      role: "Advisor",
      experence: "30+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/hansimehrotra/",
        },
      ],
    },
    {
      src: "/image/teams/monika-kulshreshtha.jpeg",
      name: "Monika Kulshreshtha",
      profession:
        "Serial Entrepreneur - IT Consultant - Growth Hacker - Mentor",
        role: "Advisor",
        experence: "20+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/monikakulshrestha/",
        },
      ],
    },
    {
      src: "/image/teams/neelam-pal.jpeg",
      name: "Neelam Pal",
      profession: "Automation and IT Consultant- Analytics-Quality Assurance",
      role: "Advisor",
      experence: "20+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/palneelam/",
        },
      ],
    },
    {
      src: "/image/teams/upal-roy.jpeg",
      name: "Upal Roy ",
      profession: "Gen AI Evangelist- Data Scientist-Strategy consultant",
      role: "Advisor",
      experence: "20+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/upalroy/",
        },
      ],
    },
    {
      src: "/image/teams/raman-rajpal.jpeg",
      name: "Raman Rajpal - Haryana ",
      profession: "IT Consultant- Software Developer",
      role: "CEO",
      experence: "15+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/raman-rajpal-a8bb2458/",
        },
      ],
    },
    {
      src: "/image/teams/vijendra-paliwal.png",
      name: "Vijendra Palliwal",
      profession: "Researcher- Design Thinking- Entrepreneur",
      role: "Core Team Member",
      experence: "10+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "#",
        },
      ],
    },
    {
      src: "/image/teams/ashutosh-taiwal.jpeg",
      name: "Ashutosh Taiwal",
      profession: "Tech Leader-Cloud Innovator-Digital Transformator",
      role: "Core Team Member",
      experence: "20+",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/ashutaiwal/",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 md:py-[80px] py-[50px]  relative">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/edumall-shape-01.png"
          width={300}
          height={300}
          className="opacity-30 w-[300px] absolute left-0 bottom-0"
          alt=""
        />
      </div>
      <div className="container relative">
        <Heading className="mb-5 text-center">Squad @ SKILLINE</Heading>
        <Paragraph className="text-center mb-10 md:px-10">
          {`The heart beats to the rhythm set by a team that runs with us into the future. At the core of our mission is a team driven by a shared vision for the future of education. With over 200 years of combined expertise, our dedicated professionals and advisors harness their diverse backgrounds to deliver exceptional outcomes for our learners. Together, we’re shaping the future of India with innovation and passion.`}
        </Paragraph>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 mt-3">
          {data.map((item: any, index: number) => {
            const {experence, role, src, name, profession, social } = item;
            return (
              <TeamCard
                key={index}
                experence={experence}
                role={role}
                name={name}
                profession={profession}
                src={src}
                social={social}
                type="style-2"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
