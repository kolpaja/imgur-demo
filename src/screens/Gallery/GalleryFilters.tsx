import React from 'react';

const GalleryFilters = () => {
  return (
    <div className='gallery-filters'>
      <div className='gallery-filter section'>
        <select name='section' id='section'>
          <option value='hot' selected>
            HOT
          </option>
          <option value='top'>TOP</option>
          <option value='user'>USER</option>
        </select>
      </div>
      <div className='filters-right'>
        <div className='gallery-filter sort'>
          <select name='sort' id='sort'>
            <option value='viral' selected>
              VIRAL
            </option>
            <option value='top'>TOP</option>
            <option value='time'>TIME</option>
            {/* //todo if user sele its rising */}
            <option value='rising'>RISING</option>
          </select>
        </div>

        <div className='gallery-filter window'>
          <select name='window' id='window'>
            <option value='day' selected>
              TODAY
            </option>
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
