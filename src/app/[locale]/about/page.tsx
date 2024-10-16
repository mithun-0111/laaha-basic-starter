'use client'
export const runtime = 'edge'

import React from 'react';
import { useTranslations } from 'next-intl';
import AboutPageData from './aboutPageData';
interface AboutPageProps {
  params: {
    locale: string
  }
}

const AboutPage = ({params} : AboutPageProps) => {
  const t = useTranslations();

  return <AboutPageData params={params}/>;
};

export default AboutPage;
