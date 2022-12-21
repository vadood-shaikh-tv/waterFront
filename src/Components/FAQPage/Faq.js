import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./faq.scss";
import Form from 'react-bootstrap/Form';

export default function Faq() {
    return (
        <>
            <Navbar />
            <div className='MainCommon'>
                <div className='FAQSection'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='FaqHeadSec border-BottomClass'>
                                    <div className='FaqHeading'>
                                        <h1>FAQ</h1>
                                    </div>
                                    <div className='FaqPara'>
                                        <span>Can't find an answer? Call us at <a href=""> 207-358-9327</a> or email <a href=""> info@waterfrontconcerts.com</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className='FaqTableSection'>

                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='TableContent tabletVeiwHide'>
                                            <h5>Table of Contents</h5>
                                            <div className='TableContestList'>
                                                <NavLink to="General">General</NavLink>
                                                <NavLink to="Accessible">Accessible Services</NavLink>
                                                <NavLink to="BoxOffice">Box Office</NavLink>
                                                <NavLink to="ClearBag">Clear Bag Policy</NavLink>
                                                <NavLink to="Smoking">Smoking Policy</NavLink>
                                                <NavLink to="Tickets">Tickets</NavLink>
                                                <NavLink to="Contest">Contest Rules</NavLink>
                                                <NavLink to="PrivacyPolicy">Privacy Policy</NavLink>

                                            </div>
                                        </div>
                                        {/* Show's on mobile View */}
                                        <div className='WebViewHide'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="1"> <Link to="General">General</Link></option>
                                                <option value="2"><Link to="Accessible">Accessible Services</Link></option>
                                                <option value="3"><Link to="BoxOffice">Box Office</Link></option>
                                                <option value="4"><Link to="ClearBag">Clear Bag Policy</Link></option>
                                                <option value="5"><Link to="Smoking">Smoking Policy</Link></option>
                                                <option value="6"><Link to="Tickets">Tickets</Link></option>
                                                <option value="7"><Link to="Contest">Contest Rules</Link></option>
                                                <option value="8"><Link to="PrivacyPolicy">Privacy Policy</Link></option>

                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className='col-md-9'>
                                        <div className='AccordionsSec'>
                                            <Outlet />
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
    )
}


