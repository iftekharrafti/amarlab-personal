import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddBlog.css";

const AddBlog = () => {
  const [fetchBlogs, setFetchBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [findBlog, setFindBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setFetchBlogs(data));
  }, []);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...blog };
    newLoginData[field] = value;
    setBlog(newLoginData);
    // console.log(newLoginData)
  };

  const addBlogSubmit = (e) => {
    e.preventDefault();
    const newFetchBlog = [...fetchBlogs, blog];
    setFetchBlogs(newFetchBlog);

    // navigate('/blog')
  };

  const deleteBlog = (id) => {
    const newBlogs = fetchBlogs.filter((blog) => blog.id !== id);
    setFetchBlogs(newBlogs);
  };

  // const editBlog = (id) => {
  //   const findBlog = fetchBlogs.find((blog) => blog.id === id);
  //   setFindBlog(findBlog);
  //   console.log(findBlog)
  //   navigate('/dashboard/editBlog')
  // };

  return (
    <div className="addBlog">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12 m-auto">
            <h2 className="py-4 text-center">Add Blog</h2>
            <form action="" onSubmit={addBlogSubmit}>
              <div className="input-group">
                <label htmlFor="">Blog Title</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Description</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Image</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Image Link"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                value="Add Blog"
                style={{ width: "200px" }}
              />
            </form>
            <h2 className="my-5 text-center">Blog List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {fetchBlogs.map((blog) => (
                  <tr>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.description.slice(0, 30)}...</td>
                    <td>
                      <Link to={`/dashboard/editBlog/${blog.id}`}>
                        <i 
                          className="fas fa-edit edit me-3"
                        ></i>
                      </Link>

                      <i
                        onClick={() => deleteBlog(blog.id)}
                        className="fas fa-trash delete"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
