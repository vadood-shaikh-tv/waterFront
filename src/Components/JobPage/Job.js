import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./job.scss";

export default function Job() {
  return (
    <>
      <Navbar />
      <div className="MainCommon">
        <div className="JobSection">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="JobHeadSec">
                  <div className="JobHeading  border-BottomClass">
                    <h1>JOBS</h1>
                  </div>
                  <div className="JobDetailSec boxStyle">
                    <h5>
                      Looking to work for Waterfront Concerts / Production
                      Services of Maine this summer?
                    </h5>
                    <h1>GREAT!</h1>
                    <p>Please click the link below and fill out the form.</p>
                    <p>We'll reach out once we start our hiring process.</p>
                    <div className="HiringSec">
                      <span>
                        {" "}
                        CLICK HERE &gt;&gt; <a href="">HIRING FORM</a>
                      </span>
                    </div>

                    <div className="HiringDetails">
                      <h6>
                        Available positions at Maine Savings Amphitheater
                        (Bangor) and Bold Point Park (East Providence, RI)
                      </h6>
                      <div className="HiringList">
                        <ul>
                          <li>
                            Security (directs fan traffic, parking, and ensure a
                            fun environment)
                          </li>
                          <li>
                            Beverage (serves beverage options to concert goers)
                          </li>
                          <li>
                            Food (prepares and serves food options to concerts
                            goers)
                          </li>
                          <li>
                            Stagehand (facilitates tour production and staging )
                          </li>
                          <li>
                            Box Office (sells tickets and assists with general
                            ticketing information and service)
                          </li>
                          <li>
                            Ambassador (greets, guides, and provides information
                            to concert goers)
                          </li>
                          <li>
                            Venue Operations (maintains venue amenities and
                            cleanliness)
                          </li>
                          <li>
                            Merchandise (sells merchandise and salable goods to
                            concert goers)
                          </li>
                          <li>Street Team (marketing)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
