import React from 'react'
import XmasCard from "../../../Assets/Images/X-masCardImage.jpg";
import packageIcon from "../../../Assets/Images/ic-packageIcon.png";
import "./featuredCard.scss"

export default function FeturedCard({ title, image, date, secondTitle, thirdTitle, Price }) {
    return (<>
        <div className='col-sm-12 col-md-4 col-lg-3 '>
            <div className="FeaturedCardSection">
                <div className="XmaxCard">
                    <div className=" XmasImage">
                        <div className="ShowDate">
                            <p> {date.slice(0, 3)}</p>
                            <p>{date.slice(9, 11)}</p>
                            <p>{date}</p>
                        </div>
                        {/* <img src={XmasCard} alt="" /> */}
                        <img src={image} alt="" />
                        {/* featureImage */}
                    </div>
                    <div className=" XmasDetails">
                        <div className="EveHeading">
                            <a href="">
                                {/* <h3>X-MAS EVE</h3> */}
                                <h3>{title}</h3>

                            </a>
                        </div>
                        <div className='PlaceName'>
                            {/* <p>WITH FINN GERRING</p> */}
                            <p>{thirdTitle}</p>
                        </div>
                        <div className="PartyHeading PartyTime">
                            <p>Show 7:00PM (ET)</p>
                            <p>
                                {/* <a href="">Cross Insurance Center</a> */}
                                <a href="">{secondTitle}</a>
                            </p>
                        </div>
                        <div className="cardFooter">
                            <div className="PriceSec">
                                <button type="" className="Price">
                                    {Price}
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
