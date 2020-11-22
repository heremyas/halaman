import React from "react";
import "./Nav.css";

const Nav = () => {
  // https://trefle.io/api/v1/plants/search?token=RFn2dI7Xud0AVrGPBmpFpaDdFDnrdv_fr-dsjT8KyGA&q=succulent
  return (
    <nav className="myNav">
      <h1 className="halaman">BOTANIM</h1>
      <ul className="items">
        <li>Home</li>
        <li>Products</li>
      </ul>
    </nav>
  );
};

export default Nav;
