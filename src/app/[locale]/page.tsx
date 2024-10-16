"use client"
export const runtime = 'edge'

import { useEffect, useState } from 'react';
import { drupal } from '@/src/lib/drupal';
import { DrupalNode } from 'next-drupal';

export default function Home() {
  const [data, setData] = useState<Boolean>(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      Homepage
    </>
  );
}
