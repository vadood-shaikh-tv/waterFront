import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VenueCard from "./VenueCard/VenueCard";
import "./venue.scss";
import Axios from "../../Service/Insrance";

export default function Venue() {
  const [item, setItem] = useState([])
  const [visible, setVisible] = useState(8)
  const LoadMore = () => {
    setVisible((Load) => Load + 8)
  }
  const APICalling = async () => {
    const VenueResponse = await Axios.get("venues")
    setItem(VenueResponse.data.data)
    // console.log("response", VenueResponse.data.data)
  }
  useEffect(() => {
    APICalling()
  }, [])
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
              {item.slice(0, visible).map((item) => {
                return < VenueCard title={item.title} image={item.featureImage} address={item.address} />
              })}

            </div>
            <div className="row">
              <div className="LoadMoreBtn">
                <button type="" onClick={LoadMore} className="LoadMore btn-primary">Load More Values</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
