import React from "react";
import GooglePlayIcon from "../../Assets/Images/googlePlayIcon.png";
import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import AppStoreIcon from "../../Assets/Images/appStoreIcon.png";
import "../../Components/Navbar/navbar.scss";
import "../Footer/footer.scss";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer--pin">


        <footer>
          <div className="FooterSection">
            <div className="container foot">
              <div className="row">
                <div className="col-md-12">
                  <div className="footerSec">
                    <div className="FooterDetails">
                      <span className="DownloadHeading">
                        DOWNLOAD WATERFRONT CONCERTS APP.
                      </span>
                      <span className="FavHeading">
                        {" "}
                        FAVORITE YOUR SHOWS. GET UPDATES.
                      </span>
                      <span className="AppstoreIcon">
                        <img src={AppStoreIcon} alt="" />
                      </span>
                      <span className="googleAppIcon">
                        <img src={GooglePlayIcon} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgBlack">
            <div className="container">
              <div className="NavbarSection">
                <a className="navbar-brand" href="#">
                  <img className="HeaderLogoIcon" src={HeaderLogo} alt="" />
                </a>

                <ul className="pagelinks">
                  <NavLink className="footer-nav-link" to="/">
                    <li >
                      <a href="/">EVENTS</a>
                    </li>
                  </NavLink>
                  <NavLink className="footer-nav-link" to="/Venue">
                    <li>
                      <a href="/venues">VENUES</a>
                    </li>
                  </NavLink>
                  <NavLink className="footer-nav-link" to="/GuestService">
                    <li>
                      <a href="/guest">GUEST SERVICES</a>
                    </li>
                  </NavLink>
                  <NavLink className="footer-nav-link" to="/Job">
                    <li>
                      <a href="/job">JOB</a>
                    </li>
                  </NavLink>
                  <NavLink className="footer-nav-link" to="/Contact">
                    <li>
                      <a href="/contact">CONTACT</a>
                    </li>
                  </NavLink>
                  <NavLink className="footer-nav-link" to="/FAQ">
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </NavLink>
                </ul>
                <div className="SocialIcons">
                  <a href="https://www.facebook.com/wfconcertsME">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/wfconcerts">
                    {" "}
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/user/wfconcerts">
                    {" "}
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/wfconcerts/">
                    {" "}
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.snapchat.com/wfconcerts">
                    {" "}
                    <i className="fa-brands fa-snapchat"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="LastLine">
            <p>
              © 2022 Waterfront Concerts. All Rights Reserved. Designed by{" "}
              <a href="">Autumn Lane.</a>{" "}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
