import { useState, useEffect } from 'react';
import axios from 'axios';
import { data as dummyData } from '../config/data';
import { GalleryFiltersTypes } from './types';

const useGalleryApi = ({
  section,
  sort,
  window,
  page,
}: GalleryFiltersTypes) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const config = {
    method: 'get',
    url: `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=true`,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
    },
    data: data,
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   await axios(config)
    //     .then(function (response) {
    //       console.log(response);
    //       setIsLoading(false);
    //       setData(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error.message);
    //       setError(error);
    //     });
    // };
    // fetchData();
    setTimeout(() => {
      setIsLoading(false);
      setData(dummyData.slice(0, 10));
    }, 1000);

    const getGalleries = () => {
      console.log('getGalleries');
    };
    getGalleries();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGalleryApi;
