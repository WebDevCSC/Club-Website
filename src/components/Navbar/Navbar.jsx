import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../../logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const membershipLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSc-14BOqnJc69J0BP7zSaLcetjyQ4r05oaAuEbYQQ5aNDOpOg/viewform?usp=sf_link";
  const newsletterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScuUHCVUwWseB1RHlFZGzYpXwVPiQIzC8peP40WeBU2kvyqFw/viewform?usp=sf_link";

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text" key={`home`}>
          <Link to="/">
            home
            <div />
          </Link>
        </li>
        <li className="app__flex p-text" key={`events`}>
          <HashLink to="/#latestevents">
            Events
            <div />
          </HashLink>
        </li>
        <li className="app__flex p-text" key={`membership`}>
          <a href={membershipLink} target="_blank" rel="noreferrer">
            membership
            <div />
          </a>
        </li>
        <li className="app__flex p-text" key={`newsletter`}>
          <a href={newsletterLink} target="_blank" rel="noreferrer">
            newsletter
            <div />
          </a>
        </li>
        <li className="app__flex p-text" key={`events`}>
          <Link to="/team">
            team
            <div />
          </Link>
        </li>
        <li key={`insta`}>
          <a
            href="https://www.instagram.com/csc_muj/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram color="#FF8D42" size={30} />
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li key={`mobile-home`}>
                <Link to="/" onClick={() => setToggle(false)}>
                  home
                </Link>
              </li>
              <li key={`mobile-events`}>
                <HashLink to="/#latestevents" onClick={() => setToggle(false)}>
                  Events
                </HashLink>
              </li>
              <li key={`mobile-membership`}>
                <a
                  href={membershipLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggle(false)}
                >
                  membership
                </a>
              </li>
              <li key={`mobile-newsletter`}>
                <a
                  href={newsletterLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggle(false)}
                >
                  newsletter
                </a>
              </li>
              <li key={`mobile-team`}>
                <Link to="/team" onClick={() => setToggle(false)}>
                  team
                </Link>
              </li>
              <li key={`mobile-insta`}>
                <a
                  href="https://www.instagram.com/csc_muj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram color="#FF8D42" size={30} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
