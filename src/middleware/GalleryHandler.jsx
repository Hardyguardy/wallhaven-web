"use client";

import Gallery from "@/components/Gallery";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { apiUrl } from "lib/data";

const GalleryHandler = ({ id, query }) => {
  const [gridData, setGridData] = useState([]);
  const [updatedQuery, setUpdatedQuery] = useState(query);
  const [isNewDataLoading, setIsNewDataLoading] = useState(false);

  const getImages = async ({ pageParam = 1 }) => {
    try {
      const response = await fetch(
        `${apiUrl}${updatedQuery}&page=${pageParam}`,
      );

      const json = await response.json();

      return json;
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error(error);
      throw new Error(error);
    }
  };

  const { isLoading, isError, data, isFetching, fetchNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["gallery", id],
      queryFn: getImages,
      getNextPageParam: (page) => {
        const { current_page: currentPage, last_page: lastPage } = page.meta;
        if (currentPage === lastPage) {
          return undefined;
        }
        return currentPage + 1;
      },
    });

  useEffect(() => {
    if (data) {
      data.pages.forEach((page, index) => {
        page.data.forEach((el, i) => {
          if (!gridData.some((item) => item.id === el.id)) {
            if (index === 0 && i === 0) {
              if (gridData.length && gridData[0].id === el.id) {
                setGridData((currentItems) => [...currentItems, el]);
              } else {
                setGridData([el]);
              }
            } else {
              setGridData((currentItems) => [...currentItems, el]);
            }
          }
        });
      });
    }
  }, [data]);

  useEffect(() => {
    if (!isFetching) {
      setIsNewDataLoading(false);
    }
  }, [isFetching]);

  useEffect(() => {
    console.log(gridData);
  }, [gridData]);

  return <Gallery isLoading={isLoading} isError={isError} />;
};

export default GalleryHandler;