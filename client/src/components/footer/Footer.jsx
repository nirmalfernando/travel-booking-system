import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          Company
          <li className="fListItem">About Us</li>
          <li className="fListItem">Privacy Policy</li>
          <li className="fListItem">Terms & Conditions</li>
        </ul>
        <ul className="fList">
          Destinations
          <li className="fListItem">Asia</li>
          <li className="fListItem">United States</li>
          <li className="fListItem">Europe</li>
          <li className="fListItem">Americas</li>
          <li className="fListItem">Oceania</li>
        </ul>
        <ul className="fList">
          Support
          <li className="fListItem">Before you Book</li>
          <li className="fListItem">At the Airport</li>
          <li className="fListItem">On the Plane</li>
          <li className="fListItem">Lost Property</li>
        </ul>
        <ul className="fList">
          Social Media
          <li className="fListItem">Instagram</li>
          <li className="fListItem">Twitter</li>
          <li className="fListItem">FaceBook</li>
          <li className="fListItem">YouTube</li>
        </ul>
      </div>
      <img src={footer} alt="" className="footerImg" />
      <div className="fText">
        <span>Sky World Travels</span><br/>
        Copyright{" "}
        <span>
          <FontAwesomeIcon icon={faCopyright} />
        </span>{" "}
        2023 by NIBM DSE22.2F <br />
        All Rights Reserved by Nirmal Fernando, Shaliha Shifry, Isuru
        Theekshana, Malith Kumaranayake.
      </div>
    </div>
  );
};

export default Footer;
