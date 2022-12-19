import React from "react";
import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import "../Navbar/navbar.scss";
import { Link, NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
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

                <NavLink className="nav-bar-link" to="/">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      EVENTS
                    </a>
                  </li>
                </NavLink>


                <NavLink className="nav-bar-link" to="/Venue">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      VENEUS
                    </a>
                  </li>
                </NavLink>
                <NavLink className="nav-bar-link" to="/GuestService">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      GUEST SERVICES
                    </a>
                  </li>
                </NavLink>
                <NavLink className="nav-bar-link" to="/Job">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      JOB
                    </a>
                  </li>
                </NavLink>
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
                    <Link to="/Season">
                      <li>
                        <a className="dropdown-item" href="#">
                          Season Seats
                        </a>
                      </li>
                    </Link>
                    <Link to="/Hiring">
                      <li>
                        <a className="dropdown-item" href="#">
                          Hiring
                        </a>
                      </li>
                    </Link>
                    <Link to="/Redeem">
                      <li>
                        <a className="dropdown-item" href="#">
                          Redeem Flex Pass
                        </a>
                      </li>
                    </Link>
                    <Link to="/Refund">
                      <li>
                        <a className="dropdown-item" href="#">
                          Luke Combs Refund Update
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>


                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WFC STORE
                  </a>
                </li>
                <NavLink className="nav-bar-link" to="/Faq">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQ
                    </a>
                  </li>
                </NavLink>
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
      </div >
      {/* <EventPage />
      <CompanyNames />
      <Featured />
      <Footer /> */}
    </>
  );
}
