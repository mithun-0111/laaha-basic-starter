export const runtime = 'edge'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Laaha Homepage",
  description: "Laaha is a safe space for women and girls to discuss health, safety, violence, and relationships.",
}

export default async function Home() {

  return (
    <>
      Homepage
    </>
  );
}
