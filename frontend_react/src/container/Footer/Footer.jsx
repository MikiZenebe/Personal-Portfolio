import React, { useEffect, useState } from "react";

import { images } from "../../constant";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../client";
import { SocialMedia } from "../../components";
import "./Footer.scss";

function Footer({ ClassNames }) {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = FormData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mikiyaszenebe10@gmail.com" className="p-text">
            mikiyaszenebe10@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +251922936393" className="p-text">
            +251922936393
          </a>
        </div>
      </div>

      {!FormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting touch!</h3>
        </div>
      )}
      <div className="app__footer--link">
        <SocialMedia />
      </div>
      <div className="copyright">
        <p className="p-text">©️2022 MICKY</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
