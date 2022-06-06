import React, { useEffect, useState } from 'react';
import useGalleryApi from '../../hooks/useGalleryApi';
import GalleryFilters from './GalleryFilters';

const Gallery = () => {
  const [list, setList] = useState([]);
  const lists = useGalleryApi({
    section: 'hot',
    sort: 'viral',
    window: 'week',
    page: 1,
  });

  return (
    <div>
      {/* gallery filter */}
      <GalleryFilters />

      {/* galleries posts */}
      {/* gallery images with infinite scrolling */}
    </div>
  );
};

export default Gallery;
