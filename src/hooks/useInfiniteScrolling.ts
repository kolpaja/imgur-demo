import React, { useState, useEffect } from 'react';

export const useInfiniteScrolling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  return {
    data,
    isLoading,
    error,
    hasMore,
    loadMore: () => {
      setIsLoading(true);
      setPage(page + 1);
    },
  };
};
