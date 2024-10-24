import React from 'react'
interface AboutPageProps {
  params: {
    locale: string
  }
}

const AboutPageData = ({params}: AboutPageProps) => {
  const {locale} = params;
  return (
    <div>AboutPageData</div>
  )
}

export default AboutPageData