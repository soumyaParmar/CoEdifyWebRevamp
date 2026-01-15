"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize dataLayer if it doesn't exist
      const w = window as any;
      w.dataLayer = w.dataLayer || [];

      // Push page_view event
      w.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_search: searchParams?.toString(),
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
