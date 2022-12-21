import React from 'react'
import XmasCard from "../../../Assets/Images/X-masCardImage.jpg";
import packageIcon from "../../../Assets/Images/ic-packageIcon.png";
import "./featuredCard.scss"

export default function FeturedCard() {
    return (<>
        <div className='col-sm-12 col-md-4 col-lg-3 '>
            <div className="FeaturedCardSection">
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
                                <h3>X-MAS EVE</h3>
                            </a>
                        </div>
                        <div className='PlaceName'>
                            <p>WITH FINN GERRING</p>
                        </div>
                        <div className="PartyHeading PartyTime">
                            <p>Show 7:00PM (ET)</p>
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
    )
}
