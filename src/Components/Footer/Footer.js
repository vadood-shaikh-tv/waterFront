import React from "react";
import GooglePlayIcon from "../../Assets/Images/googlePlayIcon.png";
import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import AppStoreIcon from "../../Assets/Images/appStoreIcon.png";
import "../../Components/Navbar/navbar.scss";
import "../Footer/footer.scss";
export default function Footer() {
  return (
    <>
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
                <li className="active">
                  <a href="/">Events</a>
                </li>
                <li>
                  <a href="/venues">Venues</a>
                </li>
                <li>
                  <a href="/guest">Guest Services</a>
                </li>
                <li>
                  <a href="/package">Packages</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
              <div className="SocialIcons">
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
          </div>
        </div>
        <div className="LastLine">
          <p>
            © 2022 Waterfront Concerts. All Rights Reserved. Designed by{" "}
            <a href="">Autumn Lane.</a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
