import { TestimonialSlider } from '@/components/core'
import React from 'react'

export const Testimonial = () => {

    const data = {
        heading: "Testimonials",
        description: `Discover how Skilline's AI-driven programs empower housewives, rural youth, job seekers, and graduates, transforming lives and supporting a self-reliant India.`,
        quote: [
            {
                rating: 5,
                title: "Empowering India's Future",
                description: "Skilline has revolutionized education in Bharat, making high-quality, AI-driven learning accessible and affordable.",
                name: "Rakesh Kumar, Educator"
            },
            {
                rating: 5,
                title: "Empowering India's Future",
                description: "Skilline has revolutionized education in Bharat, making high-quality, AI-driven learning accessible and affordable.",
                name: "Rakesh Kumar, Educator"
            },
            {
                rating: 5,
                title: "Empowering India's Future",
                description: "Skilline has revolutionized education in Bharat, making high-quality, AI-driven learning accessible and affordable.",
                name: "Rakesh Kumar, Educator"
            }
        ]
    }

    if (!data || !data.heading || !data.description || !data.quote) {
        return (
            <div className='bg-[#F3F4F6]'>
                <p>Component data not found.</p>
            </div>
        );
    }

    return (
        <div className='bg-[#F3F4F6]'>
            <TestimonialSlider heading={data.heading} description={data.description} quote={data.quote} />
        </div>
    )
}
