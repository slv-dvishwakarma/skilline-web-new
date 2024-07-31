import { Heading, PartnershipsLogos } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import Image from 'next/image'
import React from 'react'

export const HomePartnershipsLogos = () => {

    const data = {
        heading: "",
        images: [
            {
                image: "/image/logos/1.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/2.png",
                alt: "Open AI"
            },
            {
                image: "/image/logos/3.png",
                alt: "Python"
            },
            {
                image: "/image/logos/4.png",
                alt: "Canva"
            },
            {
                image: "/image/logos/5.png",
                alt: "Jira"
            },
            {
                image: "/image/logos/6.png",
                alt: "Cloud Fare"
            },
            {
                image: "/image/logos/7.png",
                alt: "MS Azure"
            },
            {
                image: "/image/logos/8.png",
                alt: "Claude 3"
            },
            {
                image: "/image/logos/9.png",
                alt: "SQL"
            },
            {
                image: "/image/logos/10.png",
                alt: "Figma"
            },
            {
                image: "/image/logos/11.png",
                alt: "Jenkins"
            },
            {
                image: "/image/logos/12.png",
                alt: "India AI"
            },
            {
                image: "/image/logos/13.png",
                alt: "Vertex AI"
            },
            {
                image: "/image/logos/14.png",
                alt: "Hugging Face"
            },
            {
                image: "/image/logos/15.png",
                alt: "Java"
            },
            {
                image: "/image/logos/16.png",
                alt: "React.js"
            },
            {
                image: "/image/logos/17.png",
                alt: "Bit Bucket"
            },
            {
                image: "/image/logos/18.png",
                alt: "Django"
            }
        ]
    }

    return (
        <div className='bg-[#FFF8F3] mb-10'>
        <div className='partnershiplogos container text-center py-[50px] space-y-10 '>
            <Heading className='text-center md:leading-[0px]'>{data.heading}</Heading>
        <GridBox columns={2} desktop={6} laptop={6} tablet={4} gap={10} className='md:space-y-0 space-y-5'>
            {data.images.map((item, index) => (
                <GridBox.GridItem key={index} className="shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-[15px] h-[130px] bg-white">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={200}
                        height={200}
                        className='m-auto h-[130px] object-contain object-center'
                    />
                </GridBox.GridItem>
            ))}
            </GridBox>
        </div>
        </div>
    )
}
