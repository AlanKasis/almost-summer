import React, { ReactNode } from 'react'

type PageContentProps = {
    title: string,
    description: ReactNode
}

const PageContent = ({title, description} : PageContentProps) => {
  return (
    <div className="grid gap-6 h-32 w-full">
        <span className="text-2xl font-semibold md:hidden">{title}</span>
        <span className="text-sm md:text-base">{description}</span>
    </div>
  )
}

export default PageContent