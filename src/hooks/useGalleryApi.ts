import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.imgur.com/3/gallery/';

export type GalleryFiltersTypes = {
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time';
  window: 'day' | 'week' | 'month' | 'year' | 'all';
  page: number;
};

const useGalleryApi = ({
  section,
  sort,
  window,
  page,
}: GalleryFiltersTypes) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const config = {
    method: 'get',
    url: `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=true`,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
    },
    data: data,
  };

  useEffect(() => {
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     setIsLoading(false);
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setError(error);
    //   });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGalleryApi;
