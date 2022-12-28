import React from "react";
import "./Footer.css";
import FacebookIcon from "./Component/icon_facebook.png";
import InstagramIcon from "./Component/icon_instagram.png";
import TwitterIcon from "./Component/icon_twitter.png";
import MailIcon from "./Component/icon_mail.png";
import TwitchIcon from "./Component/icon_twitch.png";
import Logo from "./Component/logo.png";

const Footer = () => {
  return (
    <div class="Footer container-fluid">
      <div class="row g-2 mt-5 mb-5 justify-content-evenly flex-column flex-md-row align-items-stretch">
        <div class="FirstColumn col-10 col-md-2 p-3 mx-auto mx-md-0">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div class="SecondColumn col-10 col-md-2 p-3 mx-auto mx-md-0">
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div class="ThirdColumn col-10 col-md-2 p-3 mx-auto mx-md-0">
          <p>Connect with us</p>
          <img src={FacebookIcon} alt="" />
          <img src={InstagramIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={MailIcon} alt="" />
          <img src={TwitchIcon} alt="" />
        </div>
        <div class="FourthColumn col-10 col-md-2 p-3 mx-auto mx-md-0">
          <p>Copyright Binar 2022</p>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
