import React, { useState, useEffect } from "react";
import SingleBlog from "./SingleBlog/SingleBlog";
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs">
      <div className="container">
        <h2>
          <span>Blogs</span>
        </h2>
        <div className="row">
            {
                blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
            }
          
        </div>
      </div>
    </div>
  );
};

export default Blogs;
