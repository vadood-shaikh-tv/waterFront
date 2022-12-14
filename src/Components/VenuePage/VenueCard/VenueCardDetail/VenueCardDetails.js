import React from "react";
import Footer from "../../../Footer/Footer";
import Navbar from "../../../Navbar/Navbar";
// import "../../../VenuePage/VenueCard/VenueCardDetail/venueCardDetail.scss";
import VenueCompanyImg from "../../../../Assets/Images/companyImage2.png";
import SeatingChartImgOne from "../../../../Assets/Images/SeatingImage1.jpg";
import SeatingChartImgTwo from "../../../../Assets/Images/SeatingImage2.jpg";
import SeatingChartImgThree from "../../../../Assets/Images/SeatingImage3.jpg";
import SeatingChartImgFour from "../../../../Assets/Images/SeatingImage4.jpg";
import SeatingChartImgFive from "../../../../Assets/Images/SeatingImage5.jpg";
import SeatingChartImgSix from "../../../../Assets/Images/SeatingImage6.jpg";



export default function VenueCardDetails() {
    return (
        <>
            <Navbar />
            <div className="MainCommon">
                <div className="VenueDetailSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="VenueDetailHead border-BottomClass">
                                    <div className="VenueDetailHeading">
                                        <h1>CROSS INSURANCE EVENT</h1>
                                    </div>
                                    <div className="BackToVenueSec">
                                        <button type="" className="BackToVenueBtn btn-primary">
                                            BACK TO VENUES LIST
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="VenueCompanyDetails-Section boxStyle">
                                    <div className="VenueCompanyImg">
                                        <img src={VenueCompanyImg} alt="" />
                                    </div>
                                    <div className="VenueDirection">
                                        <div className="VenueDirectionHeading">
                                            <h3>DIRECTIONS</h3>
                                            <p>515 Main StreetBangor, ME 04401</p>
                                            <p>From I-95 North or South:</p>
                                            <p>
                                                Take Exit 182A to I-395 East.Follow to Exit 3B (Main
                                                Street)Take a right onto Main StreetTake a left onto
                                                Buck Street at the Third lightParking will be on your
                                                left
                                            </p>
                                            <p>From Route 1A:</p>
                                            <p>
                                                From Ellsworth, travel to I-395 WestFollow to Exit 3
                                                (Main Street) Take a right onto Main StreetTake a left
                                                onto Buck Street at the Third lightParking will be on
                                                your left
                                            </p>
                                        </div>
                                        <div className="VenueParkingHead">
                                            <div className="ParkingHeading">
                                                <h3>PARKING</h3>
                                                <p>
                                                    On site parking is available and can be accessed from
                                                    Buck Street.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="VenueCompanyDetails-Section boxStyle">
                                    <h3>RULES</h3>
                                    <p className="sm-bold">
                                        Are cameras allowed at the Cross Insurance Center during
                                        events?
                                    </p>
                                    <p>
                                        The use of still cameras/flash photography and recording
                                        devices is prohibited at most Cross Insurance Center events.
                                        If an individual brings a camera or recording device into
                                        the venue, they will be asked to return that item to his/her
                                        vehicle. Cameras are permitted into certain events, however
                                        you should call the Box Office to at (207) 561-8333 to
                                        determine if the event you are attending allows cameras.
                                    </p>
                                    <p className="sm-bold">ATMs?</p>
                                    <p>
                                        There are two ATMs located in the facility. One is located
                                        in the Southeast Lobby across from the Box Office. The
                                        second ATM is located through the Southwest Entrance on the
                                        leftside of the concourse.
                                    </p>
                                    <p className="sm-bold">
                                        Are children required to have a valid ticket?
                                    </p>
                                    <p>
                                        For most shows and events, children under the age of two are
                                        admitted free of charge and must sit on the lap of an adult.
                                        Specific events require children a year (12 months) and
                                        older to possess a ticket and will be noted within event
                                        details.
                                    </p>
                                    <p className="sm-bold">
                                        Can I bring in my own food and drinks?
                                    </p>
                                    <p>
                                        No outside food and beverage is allowed in the facility.
                                        Most water bottles are permitted.
                                    </p>

                                    <p className="sm-bold">
                                        At what time will the general public be allowed to enter the
                                        Cross Insurance Center on event day?
                                    </p>
                                    <p>
                                        For most events, doors open one hour prior to the event
                                        start time, otherwise will be noted within event details.
                                    </p>
                                    <p className="sm-bold">
                                        Does the Cross Insurance Center prohibit guests from
                                        entering with certain items?
                                    </p>
                                    <p>
                                        The following is a list of the Cross Insurance Center
                                        restrictions:
                                    </p>
                                    <ul>
                                        <li>Alcoholic beverages or illegal drugs</li>
                                        <li>Glass bottles or aluminum cans</li>
                                        <li>Ice chests (coolers) or thermos containers</li>
                                        <li>
                                            Cameras or recording devices (allowed only at specific
                                            events){" "}
                                        </li>
                                        <li>Sticks or clubs</li>
                                        <li>Fireworks, firearms, or other weapons</li>
                                        <li>Bullhorns or noise makers</li>
                                        <li>Confetti or balloons</li>
                                        <li>Animals (except certified service pets)</li>
                                        <li>Beach balls and other inflatables</li>
                                        <li>Outside food or beverages</li>
                                        <li>Skateboards or rollerblades</li>
                                        <li>Water bottles or mugs</li>
                                    </ul>
                                    <p className="sm-bold">
                                        Once I enter the Cross Insurance Center, am I allowed to
                                        exit and re-enter using the same ticket?
                                    </p>
                                    <p className="sm-bold">
                                        The Cross Insurance Center has a no reentry policy for
                                        ticketed events. Any guest who leaves the facility during an
                                        event is required to present an unused ticket to gain
                                        admission. In the event of a special circumstance or
                                        emergency, please contact a staff member for assistance.
                                    </p>
                                    <p>Can I smoke at the Cross Insurance Center?</p>
                                    <p>
                                        The Cross Insurance Center is a non-smoking facility, except
                                        in designated smoking areas. All seating areas are
                                        classified as non-smoking. The designated smoking area(s) is
                                        located at the Northwest Exit doors, in front of sections
                                        102-103.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="VenueBoxSec boxStyle">
                                    <h3> BOX OFFICE</h3>
                                    <p>1-207-561-8300</p>
                                    <p>
                                        Trusted Choice Box Office at the Cross Insurance Center is
                                        located at 515 Main Street, Bangor, ME 04401.
                                    </p>
                                    <p>HOURS OF OPERATION</p>
                                    <p>Monday - Friday 10:00 AM to 5:00 PM</p>
                                    <p>
                                        Trusted Choice Box Office also operates with different
                                        and/or additional hours on most event days. Hours are
                                        subject to change.
                                    </p>
                                    <p>
                                        During on-sale dates/times, the Trusted Choice Box Office at
                                        the Southwest Entrance will become the main box office to
                                        purchase tickets*
                                    </p>
                                    <p>TICKET PURCHASING INFO</p>
                                    <p>
                                        There are no refunds and no exchanges on any ticket
                                        purchased for a Cross Insurance Center concert, game or
                                        event. In the event that a show is canceled or rescheduled,
                                        please contact the original point of purchase.
                                    </p>
                                    <p>
                                        Ticketmaster is the official ticketing service provider for
                                        the Cross Insurance Center. The venue cannot confirm the
                                        validity of, or be responsible for, tickets that have not
                                        been purchased directly from the venue Box Office,
                                        Ticketmaster or stated ticket outlet.
                                    </p>
                                    <p>
                                        For additional information or questions, call the Cross
                                        Insurance Center Box Office at 207-561-8333. *Tickets cannot
                                        be purchased through this phone number.
                                    </p>
                                    <p>ORDER ONLINE AT TICKETMASTER</p>
                                    <p>
                                        Ticketmaster is the official ticketing service provider for
                                        the Cross Insurance Center.
                                    </p>
                                    <p>
                                        Additional fees may apply when purchasing online through
                                        Ticketmaster*
                                    </p>
                                    <p>WILL CALL PROCEDURES</p>
                                    <p>
                                        Will Call tickets may be picked up at the Box Office
                                        beginning 2 hours prior to the event. Picture ID and credit
                                        card used for purchase are required for pickup.
                                    </p>
                                    <p>GROUP TICKETS</p>
                                    <p>
                                        There are various shows and events throughout the year that
                                        offer group discounts. The number that is considered a group
                                        varies on a show-by-show basis. If you are interested in
                                        purchasing group tickets for an event, contact the group
                                        sales department at 207-561-8311.
                                    </p>
                                    <p>AGE REQUIREMENT</p>
                                    <p>
                                        All individuals must possess a valid ticket for entry into
                                        the Cross Insurance Center. Children under two (2) years old
                                        are admitted free of charge for most events, as long as they
                                        sit on a lap. Please note specific events require children
                                        12 months or older to possess a ticket and will be noted
                                        within event details.
                                    </p>
                                    <p>Pricing stating "Seniors" refers to patrons 65 years or older.</p>
                                    <p>For additional information or questions, call the Box Office at 207-561-8333</p>
                                    <p> *Tickets cannot be purchased through this phone number.</p>
                                </div>
                                <div className="SeatingChartSec boxStyle">
                                    <h3>SEATING CHART</h3>
                                    <div className="row">
                                        <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgOne} alt="" />
                                        </div>
                                        <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgTwo} alt="" />
                                        </div> <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgThree} alt="" />
                                        </div> <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgFour} alt="" />
                                        </div> <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgFive} alt="" />
                                        </div> <div className="col-xs-4 col-md-4 col-sm-4">
                                            <img src={SeatingChartImgSix} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="PaymentAccpSec boxStyle">
                                    <div className="PaymentHead">
                                        <h3>TYPES OF PAYMENTS ACCEPTED</h3>
                                        <p>Visa,  Mastercard,  AmericanExpress,  Discover,  Cash,  </p>
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

