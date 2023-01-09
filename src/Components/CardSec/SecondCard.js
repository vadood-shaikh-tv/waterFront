import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from '../../Service/Instance';
import "./secondCard.scss"

export default function SecondCard({ title }) {

    // UPCOMING API
    const [item, setItem] = useState([])
    const CardApi = async () => {
        const cardResponse = await Axios.get("/events?currentPage=1&eventType=UPCOMING&pageSize=12")
        // console.log("CardResponse", cardResponse.data.data)
        setItem(cardResponse.data.data)
    }
    useEffect(() => {
        CardApi()
    }, [])

    return (
        <div className='SecondCardSection '>
            {item.map((item) => {
                return <div className='container'>
                    <div className='SecondCardContent'>
                        <div className='SeconCardDate'>
                            <div className='date'>
                                {item.seoDescription.slice(4, 7)}
                                <br />
                                {item.seoDescription.slice(7, 9)}
                            </div>
                        </div>
                        <div className='SecondCardTitle'>
                            <div className='RightDiv'>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                            </div>
                            <div className='LeftDiv'>
                                <Link to=""><a href="">{item.seoDescription.slice(12,)}</a></Link>
                            </div>
                        </div>
                        <div className='SecondCardBuy mobileViewHide'>
                            <div className='PriceBtn'>
                                <button type="" className='Price'>
                                    {item.price}
                                </button>
                            </div>
                            <div className='BuuBtn'>
                                <a href={item.generalTicketLink}>
                                    <button type="" className='SaleHeading'> BUY NOW</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='SecondCardBuy HideOnWeb'>
                        <div className='PriceBtn'>
                            <button type="" className='Price'>
                                {item.price}
                            </button>
                        </div>
                        <div className='BuuBtn'>
                            <a href={item.generalTicketLink}>
                                <button type="" className='SaleHeading'> BUY NOW</button>
                            </a>
                        </div>
                    </div>
                </div>
            })}
        </div >
    )

}
