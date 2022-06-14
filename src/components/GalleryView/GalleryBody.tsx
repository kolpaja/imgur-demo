import { FiHeart, FiMessageSquare } from 'react-icons/fi';

type GalleryBodyProps = {
  gallery: any;
};

const GalleryBody = ({ gallery }: GalleryBodyProps) => {
  return (
    <div className='gallery-body'>
      <h1 className='gallery-body-title'>{gallery.title}</h1>
      <p className='gallery-body-name'>
        by <strong>{gallery.account_url}</strong>
      </p>
      {gallery.images ? (
        gallery.images.map((image: any) => {
          return (
            <div key={image.id}>
              <div className='gallery-body-image-wrapper'>
                {(gallery.images && gallery.images[0].animated && (
                  <video
                    preload='auto'
                    autoPlay
                    loop
                    className='gallery-body-image'
                  >
                    <source src={gallery.images[0].mp4} type='video/mp4' />
                  </video>
                )) ||
                  (gallery.image && (
                    <img src={gallery.image.link} alt={image.title} />
                  )) || (
                    <img
                      src={image.link}
                      alt={image.title}
                      className='gallery-body-image'
                    />
                  )}
              </div>
              <p className='gallery-body-image-description'>
                {image.description}
              </p>
            </div>
          );
        })
      ) : (
        <div className='gallery-body-image-wrapper'>
          <img className='gallery-body-image' src={gallery.link} />
        </div>
      )}
      {gallery.description && (
        <p className='gallery-body-description'>{gallery.description}</p>
      )}
    </div>
  );
};

export default GalleryBody;
