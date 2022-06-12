import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { GalleryFiltersTypes } from '../../hooks/types';
import useGalleryApi from '../../hooks/useGalleryApi';
import GalleryFilters from './GalleryFilters';
import Post from './Post';

type InfiniteScrolling = {
  page: number;
  perPage: number;
  currentPage: number;
  isEndOfList: boolean;
  isLoadingPosts: boolean;
};

const Gallery = () => {
  const [list, setList] = useState<any[]>([]);
  const [isUsingFilters, setIsUsingFilters] = useState(false);
  const [filters, setFilters] = useState<GalleryFiltersTypes>({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    page: 0,
  });
  const [infiniteScrolling, setInfiniteScrolling] = useState<InfiniteScrolling>(
    {
      page: 0,
      perPage: 36,
      currentPage: 0,
      isEndOfList: false,
      isLoadingPosts: false,
    }
  );

  //load the first page of posts even after using filters
  const { data, isLoading, error } = useGalleryApi({
    sort: filters.sort,
    section: filters.section,
    window: filters.window,
    page: infiniteScrolling.page,
  });

  // using infinite scrolling to load more posts
  const onInfiniteScrolling = () => {
    console.log('infinite scrolling');
    const { pageYOffset } = window;
    const {
      documentElement: { clientHeight, scrollHeight },
    } = document;
    const { page, perPage, currentPage, isEndOfList, isLoadingPosts } =
      infiniteScrolling;

    const scrollTop = pageYOffset || document.documentElement.scrollTop;
    if (
      clientHeight + scrollTop >= scrollHeight &&
      !isLoadingPosts &&
      isEndOfList
    ) {
      setInfiniteScrolling({
        ...infiniteScrolling,
        page: page + 1,
        currentPage: currentPage + perPage,
        isLoadingPosts: true,
        isEndOfList: false,
      });
    } else if (
      clientHeight + scrollTop >= scrollHeight &&
      !isLoadingPosts &&
      !isEndOfList
    ) {
      loadNextGallery(infiniteScrolling, true);
    }
  };

  const onFilterChange = (event: any) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setIsUsingFilters(true);
    setFilters({
      ...filters,
      [select.name]: option.value,
    });
  };

  // load more posts after the first load when infinite scrolling is used and the list is not empty
  const loadNextGallery = (
    infiniteScrolling: InfiniteScrolling,
    nextPage = false
  ) => {
    console.log('load next gallery');
    let currentNextPage;
    if (
      infiniteScrolling.currentPage + infiniteScrolling.perPage >=
      list.length
    ) {
      setInfiniteScrolling({
        ...infiniteScrolling,
        isEndOfList: true,
      });
      currentNextPage = infiniteScrolling.currentPage;
    } else {
      currentNextPage =
        infiniteScrolling.currentPage + infiniteScrolling.perPage;
      setInfiniteScrolling({ ...infiniteScrolling, isEndOfList: false });
    }

    //going back to the top of  page and load filtered posts
    if (isUsingFilters) {
      console.log('is using filters and back to top');
      window.scrollTo(0, 0);
      setInfiniteScrolling({
        ...infiniteScrolling,
        currentPage: currentNextPage,
      });
      setList([
        ...list.slice(
          infiniteScrolling.currentPage,
          infiniteScrolling.currentPage + infiniteScrolling.perPage
        ),
      ]);
      setIsUsingFilters(false);
    } else {
      setList([
        ...list,
        ...list.slice(
          infiniteScrolling.currentPage,
          infiniteScrolling.currentPage + infiniteScrolling.perPage
        ),
        setInfiniteScrolling({
          ...infiniteScrolling,
          currentPage: currentNextPage,
        }),
      ]);
    }
  };

  useEffect(() => {
    setList(data);
    window.addEventListener('scroll', onInfiniteScrolling);
    return () => {
      window.removeEventListener('scroll', onInfiniteScrolling);
    };
  }, [list, setList, data, onInfiniteScrolling]);

  if (isLoading) return <Spinner />;

  return (
    <div className='gallery-screen screen'>
      <GalleryFilters onFilterChange={onFilterChange} />

      {/* galleries posts  map*/}
      <div className='gallery-list'>
        {list && list.map((post) => <Post post={post} key={post.id} />)}
      </div>
      {/* gallery images with infinite scrolling */}
    </div>
  );
};

export default Gallery;
