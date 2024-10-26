import React from 'react'
import bannerimg from "../../Assets/Banner/banner.png"
import "./Banner.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="Prestige City" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <h5>Luxurious Homes with Unparalleled Connectivity and Comfort</h5>
                        <span>New Launch</span>
                        <h2>The Prestige City</h2>
                        {/* <span>Premium 3 / 4 BHK Residence | Price Starts <span> ₹ 4.95 Cr*</span> </span> */}
                        <p>
                            <Link to="/site-visit" onClick={toTop}>
                                Enquire Now <FaArrowRightLong />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
