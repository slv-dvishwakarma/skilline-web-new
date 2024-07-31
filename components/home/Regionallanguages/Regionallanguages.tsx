import { HeadingBtn } from '@/components/core'
import React from 'react'

export const Regionallanguages = () => {
    const data = {
        title: "Personalized, skill based and job ready, training supporting Atmanirbhar Bharat and make in india",
        button: {
            label: "Read More",
            url: "/our-impact",
            target: "_self" as "_self",
        }
    }

    return (
        <HeadingBtn
            title={data.title} button={data.button}
        />
    )
}
