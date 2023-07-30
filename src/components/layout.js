import * as React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "../CSS/layout.css";
import PopupSubscribeForm from "./subscribe";
import ReactPopupLayer from "react-popup-layer";
import "react-popup-layer/assets/index.css";
import Message from "rc-message";

const Layout = ({ children }) => {
  const [click, setClick] = React.useState(false);
  const [headOpen, setHeadOpen] = React.useState(true);

  const handleClick = () => setClick(!click);
  const handleClose = () => setHeadOpen(!headOpen);

  // 15 seconds

  let openClose;

  if (click) {
    openClose = <span className="openClose">Close</span>;
  } else {
    openClose = <span className="openClose">Open</span>;
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="Wrapper">
      <header className={headOpen ? "header active" : "header"}>
        <div className="link">
          join out for exclusive offer{" "}
          <Link
            target="_blank"
            to="https://buildtoughness.beehiiv.com/"
            className="link1"
          >
            NewsLetter
          </Link>
        </div>
        <div className="newsletter-close">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleClose()} />
        </div>
      </header>
      <div className="layout-container">
        <div className="layout-logo">
          <Link to="/" className="logoLink">
            GIREESH REDDY
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav"
              onClick={() => handleClick()}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav"
              onClick={() => handleClick()}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav"
              onClick={() => handleClick()}
            >
              My Business
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              activeClassName="active"
              className="nav"
              onClick={() => handleClick()}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav contact"
              onClick={() => handleClick()}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
          {openClose}
        </div>
      </div>
      <main>
        <div>{children}</div>
      </main>
      {/* <PopupSubscribeForm className="popUp" />
      <ReactPopupLayer
        title="example title"
        visible={visible}
        onCancel={cancelModal}
        footer={[
          <button key="ok" className="btn btn-primary" onClick={onOk}>
            Subscribe
          </button>,
        ]}
        className="my-modal"
      >
        <input type="email" placeholder="your@email.com" />
      </ReactPopupLayer> */}
      {/* <EmbeddedIframe /> */}
    </div>
  );
};

export default Layout;
