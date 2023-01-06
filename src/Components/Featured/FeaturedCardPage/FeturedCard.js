import React from "react";
import "./featuredCard.scss";

export default function FeturedCard({
    title,
    image,
    date,
    secondTitle,
    thirdTitle,
    Price,
}) {
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-3 ">
                <div className="FeaturedCardSection">
                    <div className="XmaxCard">
                        <div className=" XmasImage">
                            <div className="ShowDate">
                                <p> {date.slice(0, 3)}</p>
                                <p>{date.slice(9, 11)}</p>
                                <p>{date}</p>
                            </div>
                            <img src={image} alt="" />
                        </div>
                        <div className=" XmasDetails">
                            <div className="EveHeading">
                                <a href="">
                                    <h3>{title}</h3>
                                </a>
                            </div>
                            <div className="PlaceName">
                                <p>{thirdTitle}</p>
                            </div>
                            <div className="PartyHeading PartyTime">
                                <p>Show 7:00PM (ET)</p>
                                <p>
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
    );
}
