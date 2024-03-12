import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time } = blog
  return (
    <div className='border-2 p-5 rounded-md'>
      <img src={cover} alt={`cover picture of title ${title}`} />
      <div className='flex justify-between my-2'>
        <div>
          <img className='w-16' src={author_img} alt="" />
        </div>
        <div>
          <p>{reading_time}</p>
        </div>
      </div>
      <p className='font-semibold'>title:{title}</p>
    </div>
  );
};



Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;