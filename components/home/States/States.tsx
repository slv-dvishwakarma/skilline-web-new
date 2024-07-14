import { StatesItem } from '@/components/core'
import React from 'react'

export const States = () => {

    const data = [
        {
            icon: "/image/icon/1.png",
            count: "50+",
            label: "job seekers trained",
        },
        {
            icon: "/image/icon/2.png",
            count: "30+",
            label: "jobs created",
        },
        {
            icon: "/image/icon/3.png",
            count: "30+",
            label: "internships provided to rural youth",
        },
        {
            icon: "/image/icon/4.png",
            count: "20+",
            label: "company partnerships for job placements",
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
