type PostProps = any;

const Post = ({ post }: PostProps) => {
  // console.log('post', post.images);
  return (
    <div className='post'>
      <div className='post-img'>
        <img src={post.images && post.images[0].link} alt={post.title} />
      </div>
    </div>
  );
};

export default Post;
