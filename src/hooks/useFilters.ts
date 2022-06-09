import { useEffect, useMemo, useState } from 'react';
import { GalleryFiltersTypes } from './types';

const useFilters = () => {
  const [filters, setFilters] = useState<GalleryFiltersTypes>({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    page: 0,
  });

  const onFilterChange = useMemo(() => {}, []);

  useEffect(() => {}, []);
  return filters;
};
