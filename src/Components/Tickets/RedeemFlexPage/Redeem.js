import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./redeem.scss"

export default function Redeem() {
    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='SeasonTicketsSection'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonHead border-BottomClass'>
                                <div className='SeasonHeading'>
                                    <h1>REDEEM FLEX PASS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonTicketDetails boxStyle'>
                                <div className='RedeemDetailHead'>
                                    <div className='SeasonDetailHeading'>
                                        <h1>2022 Flex Pass Redemption</h1>

                                    </div>
                                    <div className='SeasonPara'>
                                        <h6> Redemption for Flex Passes is now OPEN.</h6>
                                        <h6>NOTE :: Requests will be filled first come first serve. </h6>

                                    </div>
                                    <div className='ReddemPass'>
                                        <h6>Click here 	&gt;	&gt; <a href="">REDEEM FLEX PASS</a> &lt;&lt; Click here</h6>
                                    </div>
                                    <div className='AvailableMain'>
                                        <h6> Available Maine Savings Amphitheater Shows</h6>
                                        <p>6/23 - Dierks Bentley</p>
                                        <p>7/03 - Lynyrd Skynyrd</p>
                                        <p>7/21 - Backstreet Boys</p>
                                        <p>7/23 - Keith Urban</p>
                                        <p>8/02 - Jimmy Buffett - LIMITED INVENTORY (4 Pass Limit)</p>
                                        <p>8/03 - A Day to Remember</p>
                                        <p>8/07 - Incubus</p>
                                    </div>
                                    <div className='AvailableMain'>
                                        <h6> Available Maine Savings Amphitheater Shows</h6>
                                        <p>6/23 - Dierks Bentley</p>
                                        <p>7/03 - Lynyrd Skynyrd</p>
                                        <p>7/21 - Backstreet Boys</p>
                                        <p>7/23 - Keith Urban</p>
                                        <p>8/02 - Jimmy Buffett - LIMITED INVENTORY (4 Pass Limit)</p>
                                        <p>8/03 - A Day to Remember</p>
                                        <p>8/07 - Incubus</p>
                                    </div>
                                    <div className='AvailablePara'>
                                        <p>If we add a new show to our 2022 season we will send a note with the link allowing you to select tickets for that show if you'd like. Please note all selections are final.</p>
                                        <p>If you want to wait to make your selections that is fine, however, I would suggest if there is a show you really want to go to, please do not wait as passes are first come first serve. </p>
                                        <p>When selecting the number of tickets you want please do not exceed your total number of passes. If you do, not all of your requests will be fulfilled.</p>
                                        <p>Your tickets will be sent to you 5 days in advance of the show via Ticketmaster's ticket transfer. So you must provide a good SMS cell phone number. All the tickets will be sent to your account. Once you have the tickets you can transfer them to friends and family.</p>
                                        <p>Below you will find Ticketmaster's guides to accepting and transferring tickets.</p>
                                    </div>
                                    <div className='AvailableLinks'>
                                        <p><b>How to accept tickets</b></p>
                                        <a href="">https://help.ticketmaster.com/s/article/How-do-I-accept-transferred-tickets?language=en_US</a>
                                    </div>
                                    <div className='AvailableLinks'>
                                        <p><b>How to transfer tickets</b></p>
                                        <a href="">https://help.ticketmaster.com/s/article/How-do-I-transfer-tickets?language=en_US</a>
                                    </div>
                                    <div className='AvailableLinks'>
                                        <p><b>NEED ADDITIONAL HELP?</b></p>
                                        <p>Email us at flexpass@waterfrontconcerts.com</p>                                    </div>

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
