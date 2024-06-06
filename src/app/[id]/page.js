"use client";

import { useSearchParams } from "next/navigation";
import { apiUrl } from "/lib/data";

const Gallery = () => {
  const searchParams = useSearchParams();

  return <div>{`${apiUrl}${searchParams}`}</div>;
};

export default Gallery;
