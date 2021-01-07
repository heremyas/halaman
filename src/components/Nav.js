import React from "react";
import "./Nav.css";
import pngegg from "./images/pngegg.png"

const Nav = () => {
  // https://trefle.io/api/v1/plants/search?token=RFn2dI7Xud0AVrGPBmpFpaDdFDnrdv_fr-dsjT8KyGA&q=succulent
  return (
    <nav className="myNav">
      <h3 className="halaman">B<span><img src={pngegg} alt="O"/></span>TANIM</h3>
      <ul className="items">
        <li>Home</li>
        <li>Products</li>
      </ul>
    </nav>
  );
};

export default Nav;
