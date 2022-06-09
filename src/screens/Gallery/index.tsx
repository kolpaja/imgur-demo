import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import useGalleryApi from '../../hooks/useGalleryApi';
import GalleryFilters from './GalleryFilters';
import Post from './Post';

const Gallery = () => {
  const [list, setList] = useState([]);

  const { data, isLoading, error } = useGalleryApi({
    section: 'hot',
    sort: 'viral',
    window: 'week',
    page: 1,
  });

  console.log(data);

  if (isLoading) return <Spinner />;

  return (
    <div className='gallery-screen screen'>
      {/* gallery filter */}

      {/* gallery list */}

      <GalleryFilters />
      <div className='gallery-list'>
        {data && data.map((post) => <Post post={post} key={post.id} />)}
      </div>

      {/* galleries posts  map*/}
      {/* gallery images with infinite scrolling */}
    </div>
  );
};

export default Gallery;
