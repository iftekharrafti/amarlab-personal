import React from 'react';
import myPic from './my-pic.png';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="home-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                    <p className="exclusive">Hello! I am</p>
                        <h1 className="name">Iftekhar Rafti</h1>
                        <h3 className="exclusive"><span style={{ color: '#fff', fontWeight: 'bold' }}>
                        
                        </span></h3>
                        <ul className="list">
                            <li>Frontend Developer</li>
                            <li>Programmer</li>
                            <li>Learner</li>
                        </ul>
                        <button className="btn resume mb-4 "><a href="https://drive.google.com/file/d/19z-TmubMl7TJYygvXjnqtuHnkVmvcTwR/view" target="_blank">Get Resume</a></button>
                        <a className="btn about mb-4" href="#about">About Me</a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 my-img">
                        <img src={myPic} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;