'use client'
export const runtime = 'edge'

import { useEffect, useState } from 'react';
import { notFound } from "next/navigation";
import { getDraftData } from "next-drupal/draft";
import { Article } from "@/src/components/drupal/Article";
import { BasicPage } from "@/src/components/drupal/BasicPage";
import { drupal } from "@/src/lib/drupal";
import type { DrupalNode } from "next-drupal";

type NodePageProps = {
  params: {
    slug: string[];
  };
};

export default function NodePage({ params: { slug } }: NodePageProps) {
  const [node, setNode] = useState<DrupalNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const isDraftMode = draftMode().isEnabled;

  useEffect(() => {
    const fetchNode = async () => {
      try {
        const path = `/${slug.join("/")}`;
        // const draftData = getDraftData();

        let params: any = {};
        // if (draftData.path === path) {
        //   params.resourceVersion = draftData.resourceVersion;
        // }

        // Translating the path to discover the entity type.
        const translatedPath = await drupal.translatePath(path);
        if (!translatedPath) throw new Error("Resource not found");

        const type = translatedPath.jsonapi?.resourceName!;
        const uuid = translatedPath.entity.uuid;

        if (type === "node--article") {
          params.include = "field_media_image.field_media_image,uid";
        }

        const resource = await drupal.getResource<DrupalNode>(type, uuid, { params });
        if (!resource) throw new Error("Failed to fetch resource");

        // if (!isDraftMode && resource.status === false) {
        //   notFound();
        // }

        setNode(resource);
      } catch (err) {
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchNode();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {node?.type === "node--page" && <BasicPage node={node} />}
      {node?.type === "node--article" && <Article node={node} />}
    </>
  );
}
