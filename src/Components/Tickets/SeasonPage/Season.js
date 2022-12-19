import React from 'react'
import SeatImage from "../../../Assets/Images/SeasonSeats-image.png"
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./season.scss"

export default function Season() {
    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='SeasonTicketsSection'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonHead border-BottomClass'>
                                <div className='SeasonHeading'>
                                    <h1>2023 SEASON SEATS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonTicketDetails boxStyle'>
                                <div className='SeasonDetailHead'>
                                    <div className='SeasonDetailHeading'>
                                        <h1>2023 SEASON SEATS ON SALE NOW !</h1>
                                        <div className='SeasonImageSec'>
                                            <img src={SeatImage} alt="" />
                                        </div>
                                    </div>
                                    <div className='SeasonPara'>
                                        <p> <strong>Make the most of your entertainment dollar by treating yourself, your friends, your colleagues, and even important business partners to a unique experience.</strong></p>
                                        <p><strong>As a Season Ticket holder, you have access to the ultimate showplace for entertaining.</strong></p>
                                        <p><strong>Tickets are guaranteed to make a lasting impression on your valued clients, employees, family, and friends.
                                        </strong></p>
                                    </div>
                                </div>
                                <div className='AvailablePackageSec'>
                                    <div className='AvailableHead'>
                                        <h2>AVAILABLE PACKAGES</h2>
                                    </div>
                                    <div className='AvailableDetail'>
                                        <h3>VIP BOX SEATS (SOLD OUT)</h3>
                                        <p>Enjoy in-seat service and complimentary snacks from the comfort of our oversized seats in an environment that offers a bit more "personal space".</p>
                                        <p>This option includes parking, designated "skip the line entrance" and Hollywood Casino Premium seat club access, with a full, private bar, complimentary culinary offerings, and bathrooms.</p>
                                        <strong>Package available at Maine Savings Amphitheater, Bangor, ME </strong>

                                    </div>
                                    <div className='AvailableDetail'>
                                        <h3>VIP BOX SEATS (SOLD OUT)</h3>
                                        <p>With Intimate capacity, The Dunkin Deck is an all-inclusive VIP experience. With seated premium views of the stage, "The Dunk" offers a complimentary, full-service bar and culinary offerings. Perfect for those that want to send a client or friend to a show or just don't want to have to worry about bringing their wallet.</p>
                                        <p>This option includes parking, and designated "skip the line entrance"</p>
                                        <strong>Package available at Maine Savings Amphitheater, Bangor, ME </strong>

                                    </div>
                                    <div className='AvailableHead'>
                                        <h2 className='ReduceMarginBottom'>NEW FOR 2023</h2>
                                    </div>
                                    <div className='AvailableDetail ReduceMargin'>
                                        <h3>VIP ROCK BOXES (Limited Availability)</h3>
                                        <p>Enjoy in-seat service and complimentary snacks from the comfort of our oversized seats in an environment that offers a bit more "personal space".</p>
                                        <p>This option includes parking, designated "skip the line entrance" and Hollywood Casino Premium seat club access, with a full, private bar, complimentary culinary offerings, and bathrooms.</p>
                                        <strong>Package available at Maine Savings Amphitheater, Bangor, ME </strong>

                                    </div>
                                    <div className='AvailableDetail'>
                                        <h3>VIP BOX SEATS (SOLD OUT)</h3>
                                        <p>With Intimate capacity, The Dunkin Deck is an all-inclusive VIP experience. With seated premium views of the stage, "The Dunk" offers a complimentary, full-service bar and culinary offerings. Perfect for those that want to send a client or friend to a show or just don't want to have to worry about bringing their wallet.</p>
                                        <p>This option includes parking, and designated "skip the line entrance"</p>
                                        <strong>Package available at Maine Savings Amphitheater, Bangor, ME </strong>

                                    </div>
                                </div>
                                <div className="SeasonFooter">
                                    <p><strong>FOR AVAILABILITY AND PACKAGE INFORMATION AND PAYMENT PLANS,</strong></p>
                                    <p><strong> CONTACT CHRIS RUDOLPH AT 207.922.3204 CHRIS@WATERFRONTCONCERTS.COM</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <Footer />
    </>
    )
}
