import React, { useEffect } from "react";
import "../EventsPage/event.scss";
// import bannerImage from "../../Assets/Images/MainBg.jpg";
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import CompanyNames from "../CompanyNames/CompanyNames";
import SkyLineImage from "../../Assets/Images/sky_tunda_bg.png"
import GreyLineImage from "../../Assets/Images/gray_tunda_bg.png"
import PinkCut from "../../Assets/Images/pink_cut-Image.png"
import Axios from "../../Service/Instance";


export default function EventPage() {
  // Slider API
  const [item, setItem] = useState([]);

  useEffect(() => {
    ApiCalling()
  }, [])

  const ApiCalling = async () => {
    const response = await Axios.get('/banners')
    setItem(response.data.data.banners)

  }

  return (
    <>
      <Navbar />

      {/* slider */}
      <div className="Slider">
        <Carousel>
          {item.map((e, index) => {
            return (
              <Carousel.Item key={index}>
                <a href={e.buttonLink}>
                  <img
                    className="d-block w-100"
                    src={e.image}
                    alt="First slide"
                  />

                  <Carousel.Caption>
                    <div className="NewShowSec">
                      <div key={index} className="NewShowDetail">
                        <div className="NewShowHead">
                          <div className="NewShowHeading">

                            <h5>NEW SHOW </h5>
                            <span><img src={PinkCut} alt="" /></span>

                          </div>
                          <div className="NewShowDate">
                            <h5>{e.bannerText.slice(0, 3)}</h5>
                            <h6>{e.bannerText.substr(-3)}</h6>

                          </div>
                        </div>
                        <div className="NewShowTitle">
                          <h6>{e.title}</h6>

                          <h2>{e.bannerText}</h2>
                        </div>
                        <div className="NewShowLocation">
                          <p> <span><i className="fa-solid fa-location-dot"></i></span>{e.venue}</p>
                        </div>
                      </div>
                      <div className="GreyImageSec">
                        <img src={GreyLineImage} alt="" />
                      </div>
                      <div className="SkyImageSec">
                        <img src={SkyLineImage} alt="" />

                      </div>
                      <a href={e.buttonLink}>
                        <div className="NewShowBuy">
                          <button type="" className="btn-primary">BUY NOW</button>
                        </div>
                      </a>
                    </div>
                  </Carousel.Caption>

                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <CompanyNames />
      <Featured />
      <Footer />
    </>
  );
}

