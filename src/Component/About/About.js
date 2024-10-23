import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/Banner/banner.webp"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-title">
                            <h3>Prestige City: Luxury Living Redefined</h3>
                        </div>
                        <div className="about-detail">
                            <p>Residents of Prestige City Ghaziabad get to lead glamorous lives in its well-equipped, sophisticated infrastructure. The working gym, a clean swimming pool, and beautiful parks provide for the health-conscious, relaxation, and recreation needs of the residents; every aspect of comfort is provided within the planned community.</p>
                            <p>The privileged community at Prestige City has benefited from a splendid clubhouse that creates a beautiful social niche for people. Convenient well well-maintained gardens and new building completions have added aesthetically to the living environment, turning homes into beautiful, comfortable, and satisfying apartment complexes.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="Prestige City" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
