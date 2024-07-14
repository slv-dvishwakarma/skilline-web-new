import { Breadcrumb } from '@/components/core'
import React from 'react'

const Page = () => {
  return (
    <div><Breadcrumb
    data={[
      {
        label: "Home",
        link: "/",
        isActive: false,
      },
      {
        label: "How It Works",
        link: "/how-it-works",
        isActive: true,
      },
    ]}
  >
    How It Works
  </Breadcrumb></div>
  )
}

export default Page
