import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom';
import Axios from '../../../Service/Instance';
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./hiring.scss"

export default function Hiring() {
    const parse = require('html-react-parser');
    const [hiring, setHiring] = useState()
    const hiringApi = async () => {
        const HiringApiResponse = await Axios.get("https://api.waterfrontconcerts.com/web/ticket-submenu?slug=hiring");
        // console.log(HiringApiResponse)
        setHiring(HiringApiResponse.data.data)
    }
    useEffect(() => {
        hiringApi()
    }, [])

    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='HiringSection'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonHead border-BottomClass'>
                                <div className='SeasonHeading'>
                                    <h1>{hiring ? hiring.title : ""}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonTicketDetails boxStyle'>
                                {hiring ? parse(hiring.content) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
        <Footer />
    </>)
}
