import React from 'react'
import "./Amenities.css"
import AmenitiesData from '../../Component/Amenities/AmenitiesData'

const Amenities = () => {
    return (
        <div className='Amenities-page'>
             <div className='SiteVisit-main'>
                <div className="Page-title">
                    <h1>The Prestige City Amenities</h1>
                </div>
                <div className='Amenities-box'>
                    {AmenitiesData.map((item, index) => (
                        <div className='Amenities-card' style={{ backgroundColor: `${item.color}` }}>
                            <p>{item.cover}</p>
                            <h5>{item.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Amenities
