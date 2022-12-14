import React from "react";
import EventPage from "../EventsPage/EventPage";
import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import "../Navbar/navbar.scss";
import CompanyNames from "../CompanyNames/CompanyNames";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="NavbarSection">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="HeaderLogoIcon" src={HeaderLogo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      EVENTS
                    </a>
                  </li>
                </Link>
                <Link to="/Venue">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      VENEUS
                    </a>
                  </li>
                </Link>
                <Link to="/GuestService">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      GUEST SERVICES
                    </a>
                  </li>
                </Link>
                <Link to="/Job">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      JOB
                    </a>
                  </li>
                </Link>
                <li className="nav-item dropdown" >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"

                    aria-expanded="false"
                  >
                    TICKETS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Season Seats
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Flex Pass
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Redeem Flex Pass
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WFC STORE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="SocialIcons mobileViewHide">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-snapchat"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* <EventPage />
      <CompanyNames />
      <Featured />
      <Footer /> */}
    </>
  );
}
