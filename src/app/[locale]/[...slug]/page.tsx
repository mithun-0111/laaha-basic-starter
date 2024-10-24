export const runtime = 'edge'

import { notFound } from "next/navigation"
import { Article } from "@/src/components/drupal/Article"
import { drupal } from "@/src/lib/drupal"
import type { Metadata, ResolvingMetadata } from "next"

async function getNode(slug: string[]) {
  const path = `/${slug.join("/")}`
  // @Todo add the logic for capturing slugs.
}

type NodePageParams = {
  locale: string,
  slug: string[]
}
type NodePageProps = {
  params: NodePageParams
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params: { slug } }: NodePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let node
  try {
    node = await getNode(slug)
  } catch (e) {
    // If we fail to fetch the node, don't return any metadata.
    return {}
  }

  return {
    // title: node.title,
    // description: node.description
  }
}

export default async function NodePage({
  params: { locale, slug },
}: NodePageProps) {

  let node
  try {
    node = await getNode(slug)
  } catch (error) {
    // If getNode throws an error, tell Next.js the path is 404.
    notFound()
  }

  return (
    <>
      {/* {node.type === "node--article" && <Article node={node} />} */}
    </>
  )
}
