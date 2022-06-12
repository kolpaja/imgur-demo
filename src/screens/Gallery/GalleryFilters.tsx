type GalleryFiltersProps = {
  onFilterChange: (event: any) => void;
};

const GalleryFilters = ({ onFilterChange }: GalleryFiltersProps) => {
  return (
    <div className='gallery-filters'>
      <div className='gallery-filter section'>
        <select
          name='section'
          defaultValue='hot'
          id='section'
          onChange={onFilterChange}
        >
          <option value='hot'>HOT</option>
          <option value='top'>TOP</option>
          <option value='user'>USER</option>
        </select>
      </div>
      <div className='filters-right'>
        <div className='gallery-filter sort'>
          <select
            name='sort'
            defaultValue='viral'
            id='sort'
            onChange={onFilterChange}
          >
            <option value='viral'>VIRAL</option>
            <option value='top'>TOP</option>
            <option value='time'>TIME</option>
            {/* //todo if user selected its rising */}
            <option value='rising'>RISING</option>
          </select>
        </div>

        <div className='gallery-filter window'>
          <select
            name='window'
            defaultValue='day'
            id='window'
            onChange={onFilterChange}
          >
            <option value='day'>TODAY</option>
            <option value='week'>WEEK</option>
            <option value='month'>MONTH</option>
            <option value='year'>YEAR</option>
            <option value='all'>ALL TIME</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
