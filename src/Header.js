import React from 'react'
import './Header.css'
import myImage from './img1.png'
import {Image} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Image
          src={myImage}
          style={{ height: "18vh", width: "18vw", textAlign: "center" }}
        />
      </header>
    </div>
  );
}
export default Header