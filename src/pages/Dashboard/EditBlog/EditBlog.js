import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakedata from '../../../fakedata.json';

const EditBlog = () => {
  const [newBlogs, setNewBlogs] = useState([]);
  const [findBlogs, setFindBlogs] = useState();
  const { id } = useParams();

  

  useEffect(() => {
    fetch('/fakedata.json')
    .then(res => res.json())
    .then(data => setNewBlogs(data))
  }, [id]);

  // setFindBlogs(blogs?.find((blog) => blog.id === id));
  //   console.log(findBlogs);

  console.log('newBlogs', newBlogs)


//   const handleFind = (id) => {
//     setFindBlogs(blogs?.find((blog) => blog.id === id));
//     console.log(findBlogs);
//   };

// handleFind(id)



  return (
    <div>
      {/* {blogs.map((blog) => (
        <div>
          {() => handleFind(blog.id)}
        </div>
      ))} */}
      {/* <h2>{newFindData?.title}</h2> */}
      <h1>length </h1>
    </div>
  );
};

export default EditBlog;
