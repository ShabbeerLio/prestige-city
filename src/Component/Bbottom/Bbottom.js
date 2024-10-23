import React from 'react'
import "./Bbottom.css"
import { SiTicktick } from "react-icons/si";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const Bbottom = () => {
    return (
        <div className='Bbottom'>
            <div className="about-top">
                <div className="about-top-left">
                    {/* <h2></h2> */}
                </div>
                <div className="about-top-right">
                    <div className="about-card">
                        <div className="about-card-icn">
                            {/* <SiTicktick /> */}
                        </div>
                        <div className="about-card-title">
                            <span>Starting At</span>
                            <h5>1.30 Cr* Onwards</h5>
                        </div>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icn">
                            <IoLocationSharp />
                        </div>
                        <div className="about-card-title">
                            <span>Location</span>
                            <h5>At Siddharth Vihar, Ghaziabad</h5>
                        </div>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icn">
                            <MdOutlineMeetingRoom />
                        </div>
                        <div className="about-card-title">
                            <span>CONFIGURATIONS</span>
                            <h5>2 , 3 , 4 & 5 BHK Apartments</h5>
                        </div>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icn">
                            <SiTicktick />
                        </div>
                        <div className="about-card-title">
                            <span>Status</span>
                            <h5>New Launch</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bbottom
