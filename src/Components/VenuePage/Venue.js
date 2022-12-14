import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VenueCard from "./VenueCard/VenueCard";
import "./venue.scss";

export default function Venue() {
  return (
    <>
      <Navbar />
      <div className="MainCommon">
        <div className="VenueSection">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="VenueHeadSec">
                  <div className="VenueHeading border-BottomClass">
                    <h1>VENUE</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <VenueCard value={"sagar"} title={"TITLESSSSSSSSS"} image={"https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png"} />
              <VenueCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
