import React from "react";
import bibabo from "../../src/assets/images/bibaboimage.png";
import "../Navbar/Nav.css";
const Nav = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={bibabo} alt="image not found" />
          
        </div>
        <p>Bibaabo</p>
      </div>
    </>
  );
};

export default Nav;
