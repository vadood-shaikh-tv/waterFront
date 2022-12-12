import React from "react";
import darlinsImage from "../../Assets/Images/companyImage1.png";
import CrossCenterImage from "../../Assets/Images/companyImage2.png";
import CrossArenaImage from "../../Assets/Images/companyImage3.png";
import BoldPointImage from "../../Assets/Images/companyImage4.jpg";
import WestImage from "../../Assets/Images/companyImage7.jpg";
import AuraImage from "../../Assets/Images/companyImage5.jpg";

export default function CompanyNames() {
  return (
    <>
      <div className="companySec">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companys">
                <img src={darlinsImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img src={CrossCenterImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img src={CrossArenaImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img src={BoldPointImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img src={WestImage} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="companys">
                <img src={AuraImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
