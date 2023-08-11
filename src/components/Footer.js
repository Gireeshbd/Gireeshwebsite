import * as React from "react";
import { Link } from "gatsby";
import "../CSS/footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerlink">
        <Link to="/" className="logo">
          GIREESH REDDY
        </Link>
      </div>
    </div>
  );
};
export default Footer;
