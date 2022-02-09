import React from "react";
import { Link } from "react-router-dom";
import AddBlog from "./AddBlog/AddBlog";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-12">
            <Link to="/dashboard/addBlog">
              <button>Add Blog</button>
            </Link>
            <Link to="/dashboard/editBlog">
              <button>Edit Blog</button>
            </Link>
          </div>
          <div className="col-md-9 col-sm-9 col-12">
            <AddBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
