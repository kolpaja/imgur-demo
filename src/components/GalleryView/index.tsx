import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import GalleryBody from './GalleryBody';
import {
  singleGallery,
  singleGalleryComments,
} from '../../config/singleGalleris';

const GalleryView = () => {
  const { galleryId } = useParams();
  console.log('galleryId', galleryId, singleGallery);

  //fetch gallery data for a single gallery using galleryId
  //since api isnt ready yet, we will use dummy data
  const gallery = singleGallery.find((gallery) => gallery.id === galleryId);

  //fetch comments for a single gallery using galleryId
  //since api isnt ready yet, we will use dummy data
  const comments = singleGalleryComments;

  if (!gallery) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gallery-view'>
      <GalleryBody gallery={gallery} />
      <Comments />
    </div>
  );
};

export default GalleryView;
