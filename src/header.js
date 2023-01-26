import React from "react";

function Header(props) {
  return (
    <>
      <header className="header">
        <h1 className="heading-main">Weather Application</h1>
        <nav className="btn-items">
          <a href="#root" className="btn">
            Home
          </a>
          <a href="#root" className="btn">
            Login
          </a>
          <a href="#root" className="btn">
            Get Status
          </a>

          <a href="#root" className="btn">
            {props.name}
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
