import React from 'react'
import "./Lower.css";
import img from "./image/quote.webp";

function Lower() {
    return (
        <div className="lower">
            <div className='lower_item1'>
                <img src={img} alt="" />
            </div>
            <div className="lower_item2">
                Find out why <br /> we’re Better.
            </div>
            <div >
                <button className="lower_button">
                    See all our stories
                </button>
            </div>
        </div>
    )
}

export default Lower
