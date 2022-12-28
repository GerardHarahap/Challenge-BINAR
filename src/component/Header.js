import React from "react";
import Logo from "./Component/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            {" "}
            <img src={Logo} class="LogoImg" />{" "}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#OurServices">
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#WhyUs">
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#Testi">
                  Testimoni
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#Accordion">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
