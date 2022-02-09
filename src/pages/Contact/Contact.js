import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>
        Contact <span>Me</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-5 full-address">
            <h4>Let's get in touch</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              facilis officia velit repellat sed minima.
            </p>
            <div className="address d-flex">
              <div className="address-icon">
                <i class="fas fa-address-book"></i>
              </div>
              <div className="address-name">
                <p>Rameshworpur,Kabirhat,Noakhali</p>
              </div>
            </div>
            <div className="gmail d-flex">
              <div className="gmail-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="gmail-name">
                <p>iftekharrafti7040@gmail.com</p>
              </div>
            </div>
            <div className="number d-flex">
              <div className="number-icon">
              <i class="fas fa-phone-alt"></i>
              </div>
              <div className="number-name">
                <p>01879227040</p>
              </div>
            </div>
            <div className="connect">
              <h5 className="mb-3">Connect With me</h5>
              <div className="connect-icon mb-4">
                <a
                  href="https://www.facebook.com/iftekhar.rafti"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/iftekhar-rafti/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/iftekhar_rafti/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/IRafti" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 contact-form">
            <h4>Contact</h4>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your name"
                name="name"
              />{" "}
              <br />
              <input
                className="form-control"
                type="email"
                placeholder="Enter your Email"
                name="email"
              />{" "}
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Your Subject"
                name="subject"
              />{" "}
              <br />
              <textarea
                className="form-control"
                name="message"
                id=""
                cols="30"
                rows="8"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <div className="submit d-flex justify-content-center mt-3">
                <input className="btn" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
