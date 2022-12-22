import React from 'react'
import { Link } from 'react-router-dom';
import "./secondCard.scss"

export default function SecondCard({ title }) {
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className='SecondCardSection '>
            <div className='SecondCardContent'>
                <div className='SeconCardDate'>
                    <div className='date'>
                        {/* {date} */}
                        DEC <br />
                        22
                    </div>
                </div>
                <div className='SecondCardTitle'>
                    <div className='RightDiv'>
                        <h3>{title}</h3>
                        <p>WITH CHERRY LEMONADE & FRIENDS</p>
                    </div>
                    <div className='LeftDiv'>
                        <Link to=""><a href="">Kanu</a></Link>
                    </div>
                </div>
                <div className='SecondCardBuy mobileViewHide'>
                    <div className='PriceBtn'>
                        <button type="" className='Price'>
                            10$
                        </button>
                    </div>
                    <div className='BuuBtn'>
                        <button type="" className='SaleHeading'> BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className='SecondCardBuy HideOnWeb'>
                <div className='PriceBtn'>
                    <button type="" className='Price'>
                        10$
                    </button>
                </div>
                <div className='BuuBtn'>
                    <button type="" className='SaleHeading'> BUY NOW</button>
                </div>
            </div>
        </div >
    )
}
