import Image from 'next/image';
import React from 'react'

type LogosItem = {
    image: string;
    alt: string;
}

type PartnershipsLogos = {
    images: LogosItem;
}

export const PartnershipsLogos = ({images}: PartnershipsLogos ) => {
  return (
    <div className='PartnershipsLogos'>
        <Image src={images.image} alt={images.alt} width={200} height={200} title={images.alt} className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] py-2 px-5 rounded-[15px]'/>
    </div>
  )
}
