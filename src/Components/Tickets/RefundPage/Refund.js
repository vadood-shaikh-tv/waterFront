import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./refund.scss"
import LukeRefundImage from "../../../Assets/Images/LukeRefundImage.jpg"

export default function Refund() {
    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='SeasonTicketsSection'>
                <div className='RefundSection'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='SeasonHead border-BottomClass'>
                                    <div className='SeasonHeading'>
                                        <h1>LUKE COMBS REFUND UPDATE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='SeasonTicketDetails boxStyle'>
                                    <div className='RefundDetailHead'>
                                        <div className='SeasonDetailHeading'>
                                            <h3>Luke Combs Refund Update</h3>
                                            <p> <b> <i> Hey all, </i></b></p>
                                            <p> <b> <i>If you attended the Luke Combs concert on Saturday, September 3rd, we have finally worked through all the refunds with Ticketmaster. Be on the lookout in the coming days for your full refund for his gutty performance. Remember some banks will take a bit longer than normal but on average, this takes 3-5 business days for refunds to route and post completely. We can’t wait to welcome you all back to the Maine Savings Amphitheater in 2023.  </i></b></p>
                                            <p> <b> <i>Announcements are coming soon.</i></b></p>
                                        </div>
                                        <div className='RefundImage'>
                                            <img src={LukeRefundImage} alt="" />
                                        </div>
                                    </div>
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
