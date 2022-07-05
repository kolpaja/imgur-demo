import { FiHeart, FiMessageSquare } from 'react-icons/fi';

type GalleryBodyProps = {
  gallery: any;
};

const GalleryContent = ({ gallery }: GalleryBodyProps) => {
  return (
    <div className='gallery-content'>
      <section className='content-header'>
        <h1 className='title'>{gallery.title}</h1>
        <p className='name'>
          by <strong>{gallery.account_url}</strong>
        </p>
      </section>
      <div className='content-wrapper'>
        {gallery.images ? (
          gallery.images.map((image: any) => {
            return (
              <div key={image.id}>
                <div className='media-container'>
                  {(gallery.images && gallery.images[0].animated && (
                    <div className='image-container'>
                      <video preload='auto' autoPlay loop className='image'>
                        <source src={gallery.images[0].mp4} type='video/mp4' />
                      </video>
                    </div>
                  )) ||
                    (gallery.image && (
                      <div className='image-container'>
                        <img src={gallery.image.link} alt={image.title} />
                      </div>
                    )) || (
                      <div className='image-container'>
                        <img
                          src={image.link}
                          alt={image.title}
                          className='image'
                        />
                      </div>
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
      </div>
      {gallery.tags &&
        gallery.tags.map((tag: string) => (
          <div className='content-tags'>
            <span className='tag'>{tag}</span>
          </div>
        ))}
      {gallery.description && (
        <p className='description'>{gallery.description}</p>
      )}
    </div>
  );
};

export default GalleryContent;
