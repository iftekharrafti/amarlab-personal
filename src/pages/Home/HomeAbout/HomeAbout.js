import React from "react";
import "./HomeAbout.css";

const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="container">
        <h2>
          About <span>Me</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Personal Info</h3>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>
                  Name: <span>Iftekahr Uddin Rafti</span>
                </p>
                <p>
                  Age: <span>20 Years</span>
                </p>
                <p>
                  Nationality: <span>Bangladeshi</span>
                </p>
                <p>
                  Work Experience: <span>1 Years</span>
                </p>
                <p>
                  Email: <span>iftekharrafti7040@gmail.com</span>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <p>
                  Address: <span>Dhaka,Bangladesh</span>
                </p>
                <p>
                  Phone: <span>+8801879227040</span>
                </p>
                <p>
                  Attributes: <span>Friendly,professional</span>
                </p>
                <p>
                  Linkedin: <span>iftekhar-rafti</span>
                </p>
                <p>
                  Languages: <span>English,Bangla,Hindi</span>
                </p>
              </div>
            </div>
            <a href="#contact" className="btn mb-4">
              Contact Me
            </a>
          </div>
          <div className="col-md-6 col-12 experience">
            <div className="row">
              <div className="col-md-6">
                <div class="card card-about text-center">
                  <div class="card-body">
                    <h5 class="card-title">1+</h5>
                    <p class="card-text">Years of experience</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card card-about text-center">
                  <div class="card-body">
                    <h5 class="card-title">15+</h5>
                    <p class="card-text">Completed Projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="card card-about text-center">
                  <div class="card-body">
                    <h5 class="card-title">30+</h5>
                    <p class="card-text">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card card-about text-center">
                  <div class="card-body">
                    <h5 class="card-title">2+</h5>
                    <p class="card-text">Award Owns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
