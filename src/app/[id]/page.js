"use client";

import { useSearchParams } from "next/navigation";

import GalleryHandler from "@/middleware/GalleryHandler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const GalleryPage = ({ params }) => {
  const searchParams = useSearchParams();

  return (
    <QueryClientProvider client={queryClient}>
      <GalleryHandler id={params.id} query={searchParams} />;
    </QueryClientProvider>
  );
};

export default GalleryPage;
