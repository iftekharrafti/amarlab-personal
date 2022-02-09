import React, { useState } from "react";
import classes from "./SingleBlog.module.css";

const SingleBlog = ({ blog }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 mb-3">
      <div
        className="card"
        style={{ height: "450px", backgroundColor: "#343A40" }}
      >
        <img
          src={blog.img}
          className={`card-img-top ${classes.blogImg}`}
          alt="..."
        />
        <div className="card-body">
          <h5 className={`card-title ${classes.cardTitleBlog}`}>
            {blog.title}
          </h5>
          <p className="card-text">{blog.description.slice(0, 150)}...</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <a href="#" className="btn">
            Explore <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
