import React, { useEffect, useState } from "react";
import XmasCard from "../../Assets/Images/X-masCardImage.jpg";
import packageIcon from "../../Assets/Images/ic-packageIcon.png";
import "../CardSec/card.scss";
import Axios from "../../Service/Instance";

export default function Card() {


  // UPCOMING API
  const [item, setItem] = useState([])
  const CardApi = async () => {
    const cardResponse = await Axios.get("/events?currentPage=1&eventType=UPCOMING&pageSize=12")
    // console.log("CardResponse", cardResponse.data.data)
    setItem(cardResponse.data.data)

  }
  useEffect(() => {
    CardApi()
  }, [])

  //  title={item.title} subTitle={item.subTitle}
  return (
    <>

      {item.map((item) => {
        return <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="CardSection">
            <div className="XmaxCard">
              <div className=" XmasImage">
                <div className="ShowDate">
                  <p> {item.seoDescription.slice(0, 3)}</p>
                  <p> {item.seoDescription.slice(7, 10)}</p>
                </div>
                <img src={XmasCard} alt="" />
              </div>
              <div className=" XmasDetails">
                <div className="EveHeading">
                  <a href="">
                    {/* <h5>X-MAS EVE</h5> */}
                    <h5>{item.title}</h5>
                  </a>
                </div>
                <div className="PartyHeading">
                  {/* <p>christmas party</p> */}
                  <p>{item.subTitle}</p>
                  <button type="">
                    <img src={packageIcon} alt="" /> PACKAGE
                  </button>
                  <a href={item.link}>
                    <p>
                      {item.seoDescription}
                    </p>
                  </a>
                </div>
                <div className="cardFooter">
                  <div className="PriceSec">
                    <button type="" className="Price">
                      {item.price}
                    </button>
                    <button type="" className="SaleHeading">
                      ON SALE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      })}
    </>
  );
}
