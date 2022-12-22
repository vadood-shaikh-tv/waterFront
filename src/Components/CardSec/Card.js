import React from "react";
import XmasCard from "../../Assets/Images/X-masCardImage.jpg";
import packageIcon from "../../Assets/Images/ic-packageIcon.png";
import "../CardSec/card.scss";

export default function Card() {

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="CardSection">
          <div className="XmaxCard">
            <div className=" XmasImage">
              <div className="ShowDate">
                DEC <p> 25</p>
              </div>
              <img src={XmasCard} alt="" />
            </div>
            <div className=" XmasDetails">
              <div className="EveHeading">
                <a href="">
                  <h5>X-MAS EVE</h5>
                </a>
              </div>
              <div className="PartyHeading">
                <p>christmas party</p>
                <button type="">
                  <img src={packageIcon} alt="" /> PACKAGE
                </button>
                <p>
                  <a href="">Cross Insurance Center</a>
                </p>
              </div>
              <div className="cardFooter">
                <div className="PriceSec">
                  <button type="" className="Price">
                    $10
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
    </>
  );
}
