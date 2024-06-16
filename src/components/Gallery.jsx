import { useEffect, useState } from "react";

const Gallery = ({ isLoading, isError }) => {
  return (
    <div
      className="screen"
      style={{
        paddingRight: "22px",
        paddingLeft: "22px",
      }}
    >
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        !isError &&
        {
          /* <Grid
            data={gridData}
            onEndReached={() => {
              if (!isFetching) {
                fetchNextPage();
              }
            }}
            isNewDataLoading={isNewDataLoading}
          /> */
        }
      )}
    </div>
  );
};

export default Gallery;
