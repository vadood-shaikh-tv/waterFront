import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./hiring.scss"

export default function Hiring() {
    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='SeasonTicketsSection'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonHead border-BottomClass'>
                                <div className='SeasonHeading'>
                                    <h1>HIRING</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonTicketDetails boxStyle'>

                                <div className='AvailablePackageSec'>
                                    <h3>Our sister company Production Services of Maine is hiring for the summer concerts!</h3>
                                    <p>Click on the department you are interested in below and fill out the form to apply!</p>
                                </div>
                                <div className='HiringLinkSec'>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Box Office - </strong><a href="https://docs.google.com/forms/d/1BFqYdSjmbcRcVR5w7fP5xetuLICOy8UiaDRyAzgLtg8/closedform">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Security  - </strong><a href="https://docs.google.com/forms/d/1Krp12yvxfrm_4lViW-6nzulBdEfrldX5WShgNOD7zGM/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Ambassadors  - </strong><a href="https://docs.google.com/forms/d/1GlNhqV6huzJ8eXB4U5wBHVC0soOvUD7Wlqf3D9AUl3c/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Stagehands  - </strong><a href="https://docs.google.com/forms/d/1PZMT-9SYQjduWirHxdeHBrAhswcl8tlP2Exe8506K5k/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Venue Ops - </strong><a href="https://docs.google.com/forms/d/1nWQKTaADhxXihcZWYS-XLIjRYA_kwulLsxszrEZmrCg/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Beverage -</strong><a href="https://docs.google.com/forms/d/1O62tlS6yt9rmKOcWrYu6hrXS7UUBBMiLbIwG7LCJs7s/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Food  -</strong><a href="https://docs.google.com/forms/d/1TD4E-igVDKuDbCSPAV9Lk-YGn4fQOGn-3qnkefmoBhE/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                    <div className='HiringLinkList'>
                                        <p> <strong>Merchandise  -</strong><a href="https://docs.google.com/forms/d/1yQT6DuDmcXmzeh4qVCG98pcENhp219tRwkbWH9ss9zU/viewform?edit_requested=true">https://events.wfconcerts.com/boxoffice</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
        <Footer />
    </>)
}
