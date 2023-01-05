import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../../../Service/Instance'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import "./season.scss"
import parse from 'html-react-parser';

export default function Season() {
    const [subMenuData, setSubMenuData] = useState([])
    const { slug } = useParams()
    const ticketSubMenuData = async () => {
        const response = await Axios.get(`/web/ticket-submenu?slug=${slug}`)
        setSubMenuData(response.data.data)
    }
    useEffect(() => {
        ticketSubMenuData()

    }, [slug])
    return (<>
        <Navbar />
        <div className='MainCommon'>
            <div className='SeasonTicketsSection hiring'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonHead border-BottomClass'>
                                <div className='SeasonHeading'>
                                    <h1> {subMenuData ? (subMenuData.title) : ""}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='SeasonTicketDetails boxStyle'>
                                {
                                    subMenuData.content ? parse(subMenuData.content) : <h2>"Loading... Please wait"</h2>
                                }
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
