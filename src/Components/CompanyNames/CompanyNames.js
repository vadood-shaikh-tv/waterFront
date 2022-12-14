import React from "react";
import darlinsImage from "../../Assets/Images/companyImage1.png";
import CrossCenterImage from "../../Assets/Images/companyImage2.png";
import CrossArenaImage from "../../Assets/Images/companyImage3.png";
import BoldPointImage from "../../Assets/Images/companyImage4.jpg";
import WestImage from "../../Assets/Images/companyImage7.jpg";
import AuraImage from "../../Assets/Images/companyImage5.jpg";
import "../CompanyNames/company.scss";
import { Link } from "react-router-dom";
// import Darlings from "../EventsPage/PavilionsDarlings/Darlings";

export default function CompanyNames() {
  return (
    <>
      <div className="companySec mobileViewHide">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companys">
                <Link to="/Darlings">
                  <img className="companyIcon" src={darlinsImage} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img className="companyIcon" src={CrossCenterImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img className="companyIcon" src={CrossArenaImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img className="companyIcon" src={BoldPointImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img className="companyIcon" src={WestImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img className="companyIcon" src={AuraImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
