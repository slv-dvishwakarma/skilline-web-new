import { ImageBox } from '@/components/core'
import React from 'react'

export const SkillGap = () => {
  return (
    <div className="py-5">
      <ImageBox
        data={{
          image: "/image/images/skill-gap-blocks.jpg",
          title: "Addressing Skill Gaps",
          description:
            "The traditional education system leagues behind in fulfilling market demand and hence results as unemployment. Skilline bridge this gap by providing industry advice content, equal opportunity to the learner and personalized job guaranteed courses.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  )
}
