import { useParams } from 'react-router-dom';
import { FiHeart, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import { ReactComponent as ArrowUp } from '../../assets/icons/svg/ArrowUp.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/svg/ArrowDown.svg';
import Comments from './Comments';
import GalleryContent from './GalleryContent';
import {
  singleGallery,
  singleGalleryComments,
} from '../../config/singleGalleris';
import GallerySideBar from './GallerySideBar';

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
      <div className='gallery-main-container'>
        <div className='gallery-engagement-bar'>
          <div className='engagement-bar-container'>
            <div className='gallery-vote'>
              <ArrowUp />
              <span>score</span>
              <ArrowDown />
              <FiHeart />
            </div>
            <div className='gallery-share'>
              <FiShare2 />
            </div>
            <div className='gallery-comments'>
              <FiMessageSquare />
            </div>
          </div>
        </div>
        <div className='gallery-content-wrapper'>
          <GalleryContent gallery={gallery} />
          <Comments />
        </div>
      </div>
      <div className='gallery-sidebar'>
        <GallerySideBar />
      </div>
    </div>
  );
};

export default GalleryView;
