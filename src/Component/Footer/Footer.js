import React, { useState } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import footerimg from "../../Assets/logo.png"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";



const Footer = (props) => {

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    return (
        <div className='Footer'>
            <div className='Footer-main'>
                <div className="footer-box">
                    <div className="footer-item">
                    {/* <h2>DLF Moti Nagar</h2> */}
                        <img src={footerimg} alt="Prestige City" />
                    </div>
                    <div className="footer-item">
                        <h3>Inportant Links</h3>
                        <ul>
                            <li>
                                <Link to="/" onClick={toTop}>Home</Link>
                            </li>
                            <li>
                                <Link to="/gallery" onClick={toTop}>Gallery</Link>
                            </li>
                            <li>
                                <Link to="/price-list" onClick={toTop}>Price List</Link>
                            </li>
                            <li>
                                <Link to="/master-plan" onClick={toTop}>Master Plan</Link>
                            </li>
                            <li>
                                <Link to="/floor-plan" onClick={toTop}>Floor Plan</Link>
                            </li>
                            <li>
                                <Link to="/location" onClick={toTop}>Location</Link>
                            </li>
                            <li>
                                <Link to="/site-visit" onClick={toTop}>Book a Site Visit</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-item">
                        <h3>Contact Us</h3>
                        <div className="footer-contact">
                            <p><IoLocationOutline /></p>
                            <p>Plot No.4, Delhi-Meerut Expy, Siddharth Vihar, Ghaziabad, Uttar Pradesh 201009</p>
                        </div>
                        <div className="footer-contact">
                            <p><MdOutlineMailOutline /></p>
                            <p>info@theprestigecity.com</p>
                        </div>
                        <div className="footer-contact">
                            <Link to='tel: +919999999999'>
                                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                            <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                        </path>
                                        <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                            <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                            <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                        </path>
                                        <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                            <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                            <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                        </path>
                                    </g>
                                </svg>
                                9999999999
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-item-disclaimer">
                    {showFullText ? (
                        <>
                            <p>
                                This website is intended for informational purpose only and should not be considered the official site. This is not an offer, an invitation to offer and/or commitment of any nature. The images includes artistic impressions and stock images. The Designs, dimensions, cost, facilities, plans, images, specifications, furniture, accessories, paintings, items, electronic goods, additional fittings/fixtures, decorative items, false ceiling including finishing materials, specifications, shades, sizes and colour of the tiles and other details shown in the images are only indicative in nature and are only for the purpose of illustrating/indicating a possible layout and do not form part of the standard specifications/amenities/services to be provided in the flat. Recipients are advised to use their discretion in relying on the information/amenities described/shown therein.
                            </p>
                            <p className='disclaimer' onClick={toggleText}>Read Less</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This website is intended for informational purpose only and should not be considered the official site. This is not an offer, an invitation to offer and/or commitment of any nature. The images includes artistic impressions and stock images......
                            </p>
                            <p className='disclaimer' onClick={toggleText}>Read More</p>
                        </>
                    )}
                </div>
            </div>
            <div className='footer-down'>
                <div className="footer-copyright">
                    <div className="footer-item-policy">
                        <Link onClick={toTop} to={"/disclaimer"}>Disclaimer & Privacy Policy</Link>
                    </div>
                    <p>© 2024 The Prestige City</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
