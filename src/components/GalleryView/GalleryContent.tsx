import { FiHeart, FiMessageSquare } from 'react-icons/fi';

type GalleryBodyProps = {
  gallery: any;
};

const GalleryContent = ({ gallery }: GalleryBodyProps) => {
  return (
    <div className='gallery-content'>
      <h1 className='title'>{gallery.title}</h1>
      <p className='name'>
        by <strong>{gallery.account_url}</strong>
      </p>
      {gallery.images ? (
        gallery.images.map((image: any) => {
          return (
            <div key={image.id}>
              <div className='image-wrapper'>
                {(gallery.images && gallery.images[0].animated && (
                  <video preload='auto' autoPlay loop className='image'>
                    <source src={gallery.images[0].mp4} type='video/mp4' />
                  </video>
                )) ||
                  (gallery.image && (
                    <img src={gallery.image.link} alt={image.title} />
                  )) || (
                    <img src={image.link} alt={image.title} className='image' />
                  )}
              </div>
              <p className='image-description'>{image.description}</p>
            </div>
          );
        })
      ) : (
        <div className='image-wrapper'>
          <img className='image' src={gallery.link} />
        </div>
      )}
      {gallery.description && (
        <p className='description'>{gallery.description}</p>
      )}
    </div>
  );
};

export default GalleryContent;
