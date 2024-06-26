import React, { ReactNode } from 'react'

type PageContentProps = {
    title: string,
    description: ReactNode
}

const PageContent = ({title, description} : PageContentProps) => {
  return (
    <div className="grid gap-6">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-sm md:text-base">{description}</span>
    </div>
  )
}

export default PageContent