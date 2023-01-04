import React, { useEffect, useState } from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./refund.scss"
import LukeRefundImage from "../../../Assets/Images/LukeRefundImage.jpg"
import Axios from '../../../Service/Instance'

export default function Refund() {
    // https://api.waterfrontconcerts.com/web/ticket-submenu?slug=luke-combs-refund-update
    const [refund, setRefund] = useState()
    const refundApi = async () => {
        const RefundApiResponse = await Axios.get("https://api.waterfrontconcerts.com/web/ticket-submenu?slug=luke-combs-refund-update");
        console.log(RefundApiResponse)
        setRefund(RefundApiResponse.data.data)
    }
    useEffect(() => {
        refundApi()
    }, [])
    const parse = require('html-react-parser');
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
                                        <h1>{refund ? refund.title : ""}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='SeasonTicketDetails boxStyle'>
                                    <div className='RefundDetailHead'>
                                        {refund ? parse(refund.content) : ""}

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
