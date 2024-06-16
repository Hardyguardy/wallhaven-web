"use client";

import Gallery from "@/app-pages/Gallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const PageGallery = ({ params, searchParams }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Gallery id={params.id} query={new URLSearchParams(searchParams)} />
    </QueryClientProvider>
  );
};

export default PageGallery;
