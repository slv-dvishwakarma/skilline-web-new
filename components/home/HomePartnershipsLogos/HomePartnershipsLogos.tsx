import { Heading, PartnershipsLogos } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import React from 'react'

export const HomePartnershipsLogos = () => {

    const data = {
        heading: "Partnerships and Collaborations",
        images: [
            {
                image: "/image/logos/aws.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/aws.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/aws.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/aws.png",
                alt: "AWS"
            },
            {
                image: "/image/logos/aws.png",
                alt: "AWS"
            }
        ]
    }

  return (
    <div className='partnershiplogos container text-center py-[50px]'>
        <Heading className='text-center md:leading-[0px]'>{data.heading}</Heading>
    <GridBox columns={5} className='pt-[50px]'>
        {data.images.map((item, index) => (
        <GridBox.GridItem columnMerge={1} key={index}>
            <PartnershipsLogos images={item}/>
        </GridBox.GridItem>
        ))}
    </GridBox>
    </div>
  )
}
