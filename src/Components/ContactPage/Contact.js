import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./contact.scss"

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="MainCommon">
                <div className="ContactSection">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="ContactHeadSec border-BottomClass">
                                    <div className="ContactHeading  ">
                                        <h1>CONTACT WATERFRONT CONCERTS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-8">
                                <div className="ContactFormSec boxStyle">
                                    <form>
                                        <div className="NameDiv">

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label for="formGroupExampleInput" className="form-label">Your Name</label>

                                                    <input type="text" className="form-control" aria-label="First name" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label for="formGroupExampleInput" className="form-label">Your Email</label>

                                                    <input type="text" className="form-control" aria-label="Last name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label for="formGroupExampleInput" className="form-label">Subject</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" />
                                        </div>

                                        <div className="mb-4">
                                            <label for="formGroupExampleInput" className="form-label">Message</label>
                                            <div className="form-floating">

                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

                                            </div>
                                        </div>
                                        <div className="ContactSubmitBtn">
                                            <button type="submit">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="SocialMediaSec boxStyle">
                                    <h3>SOCIAL MEDIA</h3>
                                    <div>
                                        <a href="">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            {/* <i className="fa-brands fa-facebook"></i> */}
                                            Facebook
                                        </a>
                                    </div>

                                    <div>
                                        <a href=""><i className="fa-brands fa-youtube"></i>
                                            Youtube</a>
                                    </div>
                                    <div>

                                        <a href=""> <i className="fa-brands fa-instagram"></i>
                                            Instagram</a>
                                    </div>
                                    <div>

                                        <a href=""><i className="fa-brands fa-snapchat"></i>
                                            Snapchat</a>
                                    </div>
                                </div>
                                <div className="SocialMediaSec boxStyle">
                                    <h3>PHONE NUMBERS</h3>
                                    <div>
                                        <p className="LocationName"> Ticketmaster Box Office:</p>
                                        <p className="LocationNumber">Call 1-800-358-3000</p>
                                    </div>
                                    <div>
                                        <p className="LocationName"> Bangor Office Phone:</p>
                                        <p className="LocationNumber">Call 207-358-9327</p>
                                    </div>
                                    <div>
                                        <p className="LocationName"> Bangor Office Fax:</p>
                                        <p className="LocationNumber">Send 207-827-3508</p>
                                    </div>
                                </div>
                                <div className="EmailSec boxStyle">
                                    <h3>EMAILS</h3>
                                    <div>
                                        <div>
                                            <p className="LocationName"> General Information:</p>
                                            <p className="LocationNumber">info@waterfrontconcerts.com</p>
                                        </div> <div>
                                            <p className="LocationName"> Sponsorship Inquiries:</p>
                                            <p className="LocationNumber">sponsorship@waterfrontconcerts.com</p>
                                        </div> <div>
                                            <p className="LocationName"> Charitable Donation Request:</p>
                                            <p className="LocationNumber">donations@waterfrontconcerts.com</p>
                                        </div> <div>
                                            <p className="LocationName"> Volunteer Inquiries:</p>
                                            <p className="LocationNumber">volunteer@waterfrontconcerts.com</p>
                                        </div> <div>
                                            <p className="LocationName"> Employment Opportunities:</p>
                                            <p className="LocationNumber">employment@waterfrontconcerts.com</p>
                                        </div>
                                        <div>
                                            <p className="LocationName"> Security Staff Opportunities:</p>
                                            <p className="LocationNumber">tim@productionservicesofmaine.com</p>
                                        </div>
                                        <div>
                                            <p className="LocationName">Local Booking Requests:</p>
                                            <p className="LocationNumber">booking@waterfrontconcerts.com</p>
                                        </div>
                                        <div>
                                            <p className="LocationName">Ticketing Questions:</p>
                                            <p className="LocationNumber">tickets@waterfrontconcerts.com</p>
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

