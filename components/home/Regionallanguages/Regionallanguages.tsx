import { HeadingBtn } from '@/components/core'
import React from 'react'

export const Regionallanguages = () => {
    const data = {
        title: "Unlocking Potential: We use AI to provide personalized learning and job skills in India, in local languages and suited to needs, to help our country grow and prosper."
    }

    return (
        <HeadingBtn
            title={data.title}
        />
    )
}
