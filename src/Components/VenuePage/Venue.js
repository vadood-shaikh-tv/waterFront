import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VenueCard from "./VenueCard/VenueCard";
import "./venue.scss";
import Axios from "../../Service/Instance";
import LoadingImage from "../../Assets/Images/loading_Gif.gif"

export default function Venue() {
  const [item, setItem] = useState([])
  const [visible, setVisible] = useState(8)
  const [loading, setLoading] = useState(false);

  const LoadMore = () => {
    setVisible((Load) => Load + 8)
  }


  const APICalling = async () => {
    try {
      setLoading(true)
      const VenueResponse = await Axios.get("venues")
      setItem(VenueResponse.data.data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  useEffect(() => {
    APICalling()
  }, [])
  if (loading) {
    return (<><div className="loadingDiv">
      <img className="LoadingImage" src={LoadingImage} alt="" />
    </div></>)
  }
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
                return < VenueCard title={item.title} image={item.featureImage} address={item.address} id={item._id} />
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
