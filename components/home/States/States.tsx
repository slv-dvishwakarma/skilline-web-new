import { StatesItem } from '@/components/core'
import React from 'react'

export const States = () => {

    const data = [
        {
            icon: "/image/icon/1.png",
            count: "50+",
            label: "Job Seekers Trained",
        },
        {
            icon: "/image/icon/2.png",
            count: "30+",
            label: "Jobs Created",
        },
        {
            icon: "/image/icon/3.png",
            count: "30+",
            label: "Internships Provided To Rural Youth",
        },
        {
            icon: "/image/icon/4.png",
            count: "20+",
            label: "Company Partnerships",
        }
    ]

  return (
    <div className='bg-[#F4F9FF] py-[50px]'>
    <div className='container '>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-10'>
            {data.map((item, index) => (
                <StatesItem 
                key={index}
                icon={item.icon}
                label={item.label}
                count={item.count}
                />
            ))}
        </div>
    </div>
    </div>
  )
}
