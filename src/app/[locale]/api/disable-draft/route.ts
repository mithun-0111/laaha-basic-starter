import { disableDraftMode } from "next-drupal/draft"
import type { NextRequest } from "next/server"
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  return disableDraftMode()
}
