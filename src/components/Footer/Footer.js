import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Made by RAVI </div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/raviii011/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/its_drp"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/DRP07"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ravi-desai-1a87a4173/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        {/* <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ravi-desai-1a87a4173/"
          target="_blank"
        >
          <i class="fa-brands fa-mail"></i>
        </a> */}
      </div>
    </>
  );
};

export default Footer;
