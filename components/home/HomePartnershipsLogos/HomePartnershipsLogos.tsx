import { Heading, PartnershipsLogos } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import React from 'react'

export const HomePartnershipsLogos = () => {

    const data = {
        heading: "Partnerships and Collaborations",
        images: [
            {
                image: "/image/logos/1.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/2.png",
                alt: "India AI"
            },
            {
                image: "/image/logos/3.png",
                alt: "Cloud Flare"
            },
            {
                image: "/image/logos/4.png",
                alt: "Python"
            },
            {
                image: "/image/logos/5.png",
                alt: "Django"
            }
        ]
    }

    return (
        <div className='partnershiplogos container text-center py-[50px] space-y-10'>
            <Heading className='text-center md:leading-[0px]'>{data.heading}</Heading>
            <PartnershipsLogos images={data.images} />
        </div>
    )
}
