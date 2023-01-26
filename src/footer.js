import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav className="footer-items">
          <a href="#root" className="foot-item">
            About us
          </a>
          <a href="#rot" className="foot-item">
            Contact us
          </a>
          <a href="#root" className="foot-item">
            Privacy
          </a>
          <a href="#root" className="foot-item">
            Terms & Conditions
          </a>
        </nav>

        <h2 className="footer-heading">
          Made with ❤️ by <span> Sivasai</span>
          <a
            href="https://github.com/sivasaisilla"
            className="btn btn-foot"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </h2>
      </footer>
    </>
  );
}

export default Footer;
