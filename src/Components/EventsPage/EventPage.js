import React, { useEffect } from "react";
import "../EventsPage/event.scss";
// import bannerImage from "../../Assets/Images/MainBg.jpg";
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import axios from 'axios';
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import CompanyNames from "../CompanyNames/CompanyNames";
import SkyLineImage from "../../Assets/Images/sky_tunda_bg.png"
import GreyLineImage from "../../Assets/Images/gray_tunda_bg.png"


export default function EventPage() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    ApiCalling()
  }, [])

  const ApiCalling = async () => {
    const response = await axios.get('https://api.waterfrontconcerts.com/banners')
    setItem(response.data.data.banners)
  }
  return (
    <>
      <Navbar />

      {/* slider */}
      <Carousel>
        {item.map((e, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={e.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="NewShowSec">
                  <div className="NewShowDetail">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                  <div className="GreyImageSec">
                    <img src={GreyLineImage} alt="" />
                  </div>
                  <div className="SkyImageSec">
                    <img src={SkyLineImage} alt="" />

                  </div>
                  <div className="NewShowBuy">
                    <button type="">BUY NOW</button>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <CompanyNames />
      <Featured />
      <Footer />
    </>
  );
}

