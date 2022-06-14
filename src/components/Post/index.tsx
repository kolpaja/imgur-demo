import { Link } from 'react-router-dom';
import { FiArrowUp, FiEye, FiMessageCircle } from 'react-icons/fi';

type PostProps = any;

const Post = ({ post }: PostProps) => {
  return (
    <div className='post'>
      <div className='post-wrapper'>
        <Link className='post-link' to={`/gallery/${post.id}`}>
          <div className='post-container'>
            <div className='post-img-wrapper'>
              <img
                src={
                  post.cover
                    ? `http://i.imgur.com/${post.cover}b.jpg`
                    : `http://i.imgur.com/${post.id}b.jpg`
                }
                alt={post.title}
              />
            </div>

            <div className='post-meta'>
              <div className='post-title'>{post.title}</div>

              <div className='post-info'>
                <div className='item post-score'>
                  <FiArrowUp className='icon arrow-up' />
                  <span className='post-score'>{post.score}</span>
                </div>

                <div className='item post-comment'>
                  <FiMessageCircle className='icon' />
                  <span className='post-comment-count'>
                    {post.comment_count}
                  </span>
                </div>

                <div className='item post-views'>
                  <FiEye className='icon' />
                  <span className='post-views-count'>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
