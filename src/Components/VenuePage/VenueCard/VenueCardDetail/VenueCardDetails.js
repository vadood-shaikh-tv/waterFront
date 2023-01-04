import React, { useEffect, useState } from "react";
import Footer from "../../../Footer/Footer";
import Navbar from "../../../Navbar/Navbar";
import "../venueCard.scss"
import { Link, useLocation } from "react-router-dom";
import Axios from "../../../../Service/Instance";
// import parse from 'html-react-parser';
// // import VenueCompanyImg from "../../../../Assets/Images/companyImage2.png";
// import SeatingChartImgOne from "../../../../Assets/Images/SeatingImage1.jpg";
// import SeatingChartImgTwo from "../../../../Assets/Images/SeatingImage2.jpg";
// import SeatingChartImgThree from "../../../../Assets/Images/SeatingImage3.jpg";
// import SeatingChartImgFour from "../../../../Assets/Images/SeatingImage4.jpg";
// import SeatingChartImgFive from "../../../../Assets/Images/SeatingImage5.jpg";
// import SeatingChartImgSix from "../../../../Assets/Images/SeatingImage6.jpg";


export default function VenueCardDetails() {

    const location = useLocation()
    const [item, setItem] = useState()
    const [itemImage, setItemImage] = useState([])
    const [payment, setPayment] = useState([])
    const APICalling = async () => {
        const VenueResponse = await Axios.get(`events?currentPage=1&pageSize=12&venueId=${location.state}`);
        console.log(VenueResponse.data.data[0].venue);
        setItem(VenueResponse.data.data[0].venue);
        setItemImage(VenueResponse.data.data[0].venue.sittingChartImage);
        setPayment(VenueResponse.data.data[0].venue.typeOfPayments);

    }

    useEffect(() => {
        APICalling()
    }, [])
    const parse = require('html-react-parser');
    return (
        <>
            <Navbar />
            <div className="MainCommon">
                <div className="VenueDetailSection">
                    <div className="container">
                        {/* {item.map((item) => { */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="VenueDetailHead border-BottomClass">
                                    <div className="VenueDetailHeading">
                                        {/* <h1>MAINE SAVINGS AMPHITHEATER</h1> */}
                                        <h1>{item ? item.title : ""}</h1>
                                    </div>
                                    <div className="BackToVenueSec">
                                        <Link to="/Venue">
                                            <button type="" className="BackToVenueBtn btn-primary">
                                                BACK TO VENUES LIST
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* })} */}
                        <div className="row">

                            <div className="col-md-8">
                                <div className="VenueCompanyDetails-Section boxStyle">
                                    <div className="VenueCompanyImg">
                                        {/* <img src="https://d13r7tundc6p2h.cloudfront.net/img-1634049593807.jpg" alt="" /> */}
                                        <img src={item ? item.bannerImage : ""} alt="" />
                                    </div>
                                    <div className="VenueDirection">
                                        <div className="VenueDirectionHeading">
                                            <h3>DIRECTIONS</h3>
                                            <p>{item ? parse(item.directions) : ""}</p>

                                        </div>
                                        <div className="VenueParkingHead">
                                            <div className="ParkingHeading">
                                                <h3>PARKING</h3>
                                                <p>
                                                    {item ? parse(item.description) : ""}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="VenueCompanyDetails-Section boxStyle">
                                    <h3>RULES</h3>
                                    <p className="bold">
                                        {item ? parse(item.termsAndRules) : ""}
                                    </p>
                                    <p>
                                        {item ? parse(item.termsAndRules) : ""}
                                    </p>


                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="BoxOfficeSection">

                                    <div className="VenueBoxSec boxStyle">
                                        <h3> BOX OFFICE</h3>
                                        {parse(`<p>${item ? item.boxOfficePhone : ""}</p>`)}
                                        <p>
                                            {item ? parse(item.boxOfficeWorkingHours) : ""}
                                        </p>
                                        <p>{item ? parse(item.info) : ""}</p>

                                    </div>
                                    <div className="SeatingChartSec boxStyle">
                                        <h3>SEATING CHART</h3>
                                        <div className="SeatingChartImg">
                                            <div className="Images">
                                                {
                                                    itemImage ? itemImage.map((e) => {
                                                        return <img src={e} />
                                                    }) : "!"
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="PaymentAccpSec boxStyle">
                                        <div className="PaymentHead">
                                            <h3>TYPES OF PAYMENTS ACCEPTED</h3>
                                            {
                                                payment ? payment.map((e) => {
                                                    return <p>{e},</p>
                                                }) : ""
                                            }
                                            {/* <p>{item ? parse(item.typeOfPayments) : ""}</p> */}
                                            {/* <p>Visa,  Mastercard,  AmericanExpress,  Discover,  Cash,</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

