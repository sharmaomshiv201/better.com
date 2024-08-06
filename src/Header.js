import React, { useState } from "react";
import "./Header.css";

function DropDown1() {
    return (
        <div className="dropdown-menu">
            <ul className="">
                <li>
                    <a href="#apply">Apply now</a>
                </li>
                <li>
                    <a href="#purchase-rates">Purchase rates</a>
                </li>
                <li>
                    <a href="#affordability-calculator">Affordability calculator</a>
                </li>
                <li>
                    <a href="#mortgage-calculator">Mortgage calculator</a>
                </li>
                <li>
                    <a href="#rent-vs-buy">Rent vs buy calculator</a>
                </li>
                <li>
                    <a href="#find-agent">Find an agent</a>
                </li>
                <li>
                    <a href="#va-loans">VA loans</a>
                </li>
                <li>
                    <a href="#learning-center">Learning center</a>
                </li>
            </ul>
        </div>
    );
}
function DropDown2() {
    return (
        <div className="dropdown-menu">
            <ul >
                <li className="dropdown_menu">
                    <a href="#apply">Apply Now</a>
                </li>
                <li>
                    <a href="#refinance-rates">Refinance Rates</a>
                </li>
                <li>
                    <a href="#refinance-calculator">Cash-out Refinance Calculator</a>
                </li>
                <li>
                    <a href="#learning-center">Learning Center</a>
                </li>

            </ul>
        </div>
    );
}
function DropDown3() {
    return (
        <div className="dropdown-menu">
            <ul>
                <li><a href="#apply">Apply Now</a></li>
                <li><a href="#calculate">Calculate your cash</a></li>
                <li><a href="#hellocvscof">HELLOC vs Cash-out-finance</a></li>
                <li><a href="#learning-center">Learning Center</a></li>
            </ul>
        </div>
    );
}

function DropDown4() {
    return (
        <div className="dropdown-menu">
            <ul>
                <li><a href="#purchase-mortgage">Purchase Mortgage Rates</a></li>
                <li><a href="#refinance-rates">Refinance rates</a></li>
                <li><a href="#refinance-cash-out-rates">Refinance cash-out rates</a></li>
                <li><a href="#helloc-rates">HELOC rates</a></li>
                <li><a href="#va-rates">Purchase VA rates</a></li>
            </ul>
        </div>
    );
}

function DropDown5() {
    return (
        <div className="dropdown-menu">
            <ul className="">
                <li>
                    <a href="#insurance">Get Insurance</a>
                </li>
                <li>
                    <a href="#title-closing">Title and Closing</a>
                </li>
                <li>
                    <a href="#better-match">Better Attorney Match</a>
                </li>
                <li>
                    <a href="#learning-center">Learning Center</a>
                </li>
                <li>
                    <a href="#better-agent-match">Better Agent Match</a>
                </li>
                <li>
                    <a href="#better-duo">Better Duo</a>
                </li>

            </ul>
        </div>
    );
}

function DropDown6() {
    return (
        <div className="dropdown-menu">
            <ul className="">
                <li>
                    <a href="#insurance">Call us anytime at 415-523-8837</a>
                </li>


            </ul>
        </div>
    );
}


function Header() {
    const [isDropdown1Visible, setDropdown1Visible] = useState(false);
    const [isDropdown2Visible, setDropdown2Visible] = useState(false);
    const [isDropdown3Visible, setDropdown3Visible] = useState(false);
    const [isDropdown4Visible, setDropdown4Visible] = useState(false);
    const [isDropdown5Visible, setDropdown5Visible] = useState(false);
    const [isDropdown6Visible, setDropdown6Visible] = useState(false);


    const handleMouseEnter1 = () => setDropdown1Visible(true);
    const handleMouseLeave1 = () => setDropdown1Visible(false);

    const handleMouseEnter2 = () => setDropdown2Visible(true);
    const handleMouseLeave2 = () => setDropdown2Visible(false);

    const handleMouseEnter3 = () => setDropdown3Visible(true);
    const handleMouseLeave3 = () => setDropdown3Visible(false);

    const handleMouseEnter4 = () => setDropdown4Visible(true);
    const handleMouseLeave4 = () => setDropdown4Visible(false);

    const handleMouseEnter5 = () => setDropdown5Visible(true);
    const handleMouseLeave5 = () => setDropdown5Visible(false);

    const handleMouseEnter6 = () => setDropdown6Visible(true);
    const handleMouseLeave6 = () => setDropdown6Visible(false);
    return (
        <div className="header">
            <div className="header_left">
                <a href="/" className="logo">
                    Better
                </a>
                <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <a href="#buy" className="header_items">
                        Buy
                    </a>
                    {isDropdown1Visible && <DropDown1 />}
                </div>
                <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                    <a href="#refinance" className="header_items">
                        Refinance
                    </a>
                    {isDropdown2Visible && <DropDown2 />}
                </div>
                <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                    <a href="#heloc" className="header_items">
                        HELOC
                    </a>
                    {isDropdown3Visible && <DropDown3 />}
                </div>
                <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                    <a href="#rates" className="header_items">
                        Rates
                    </a>
                    {isDropdown4Visible && <DropDown4 />}
                </div>
                <div onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                    <a href="#betterplus" className="header_items">
                        Better+
                    </a>
                    {isDropdown5Visible && <DropDown5 />}
                </div>
            </div>

            <div className="header_right">
                <div onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                    <a href="#notifications" className="header_items header_items_img">
                        <img
                            src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF"
                            alt="not found"
                        />
                    </a>
                    {isDropdown6Visible && <DropDown6 />}
                </div>

                <a href="#signin" className="header_items">
                    Sign in
                </a>
                <a href="#continue" className="header_items header_lastitem">
                    Continue
                </a>
            </div>
        </div>
    );
}

export default Header;
