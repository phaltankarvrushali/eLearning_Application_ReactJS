import React from 'react';
import BlogItem from './BlogItem/index.jsx';
import './styles.scss';

// Bloglist jss file

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;

