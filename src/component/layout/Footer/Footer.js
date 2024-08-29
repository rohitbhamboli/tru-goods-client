import React from "react";
import playStore from "../../../images/playStore.png";
import appStore from "../../../images/appStore.png";
import "./Footer.css";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Downloads</h4>
        {/* <p>Download our app for Android or IOS</p> */}
        <img src={playStore} alt="Play Store" />
        <img src={appStore} alt="App Store" />
      </div>
      <div className="midFooter">
        <h1>Tru Goods</h1>
        <p>High quality and customer satisfaction is our first priority</p>
        <p>Copyrights 2023 &copy; Rohit Sharma</p>
      </div>
      <div className="rightFooter">
        <h4>Follow us</h4>
        <a
          href="https://www.instagram.com/rohit_shrma.24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-sharma-615912234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/rohitbhamboli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubInverted />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
