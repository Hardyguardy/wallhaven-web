"use client";

import Gallery from "@/app-pages/Gallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { galleries } from "lib/data";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const PageGallery = ({ params }) => {
  const { name } = params;
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(
      galleries.find((gallery) => gallery.name.toLowerCase() === name).query,
    );
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Gallery name={name} query={query} />
    </QueryClientProvider>
  );
};

export default PageGallery;
