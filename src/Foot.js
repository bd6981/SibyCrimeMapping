import React from "react";
import "./Header.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 className="designer">Designed and Developed By : Brittany Davis</h4>
        <div className="item2">
          <a href="http://github.com/bd6981" className="item1">
            <BsGithub size="20px" />
          </a>

          <a
            href="http://www.linkedin.com/in/brittany~davis/"
            className="item1">
            <AiOutlineLinkedin size="20px" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Foot;