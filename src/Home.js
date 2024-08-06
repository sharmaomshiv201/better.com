import React from 'react'
import Header from "./Header";
import "./Home.css";
import img from "./image/photo.webp"

function Home() {
    return (
        <div className="home">

            <img src={img} alt="" />
            <div className="home_item" >

                Mortgages <br />
                made simple

            </div>
            <button className="home_button">
                Start my approval
            </button>
            <div className="home_item1">
                ⏱︎ 3 min | No credit impact

            </div>

        </div>

    )
}

export default Home
