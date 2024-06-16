import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useStore } from "store";
import Grid from "components/Grid"; 
import { useRouter } from "next/router";

const Gallery = () => {
  const router = useRouter();
  const { name, query, queryWithFilters } = router.query;
  const [gridData, setGridData] = useState([]);
  const [updatedQuery, setUpdatedQuery] = useState(queryWithFilters);
  const [isNewDataLoading, setIsNewDataLoading] = useState(false);
  const filters = useStore((store) => store.filters);

  const getImages = async ({ pageParam = 1 }) => {
    try {
      const response = await fetch(`${updatedQuery}&page=${pageParam}`);
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
      queryKey: ["gallery", name],
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
    if (updatedQuery.replace(query, "") !== filters) {
      setUpdatedQuery(`${query}${filters}`);
    }
  }, [filters]);

  useEffect(() => {
    refetch();
    setIsNewDataLoading(true);
  }, [updatedQuery]);

  useEffect(() => {
    if (!isFetching) {
      setIsNewDataLoading(false);
    }
  }, [isFetching]);

  return (
    <div
      className="screen"
      style={{
        paddingRight: "22px",
        paddingLeft: "22px",
      }}
    >
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader">Loading...</div> {}
        </div>
      ) : (
        !isError && (
          <Grid
            data={gridData}
            onEndReached={() => {
              if (!isFetching) {
                fetchNextPage();
              }
            }}
            isNewDataLoading={isNewDataLoading}
          />
        )
      )}
    </div>
  );
};

export default Gallery;
