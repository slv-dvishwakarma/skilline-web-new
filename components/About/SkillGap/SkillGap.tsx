import { ImageBoxStyle } from '@/components/core'
import React from 'react'

export const SkillGap = () => {
  return (
    <div className="py-5">
      <ImageBoxStyle
        data={{
          image: {
              url: "/image/images/skill-gap-blocks.jpg",
              width: 1024,
              height: 1024,
              size: ""
          },
          title: "Addressing Skill Gaps",
          description: `The traditional education system leagues behind in fulfilling market demand and hence results as unemployment. Skilline bridge this gap by providing industry advice content, equal opportunity to the learner and personalized job guaranteed courses.`,
      }} imageAlign="right"
      />
    </div>
  )
}
