import React from 'react'
import "./HomePlan.css"
import Form from '../Form/Form'
// import homepim from "../../Assets/Masterplan/homeplan.webp"

const HomePlan = () => {

    return (
        <div className='HomePlan'>
            <div className='HomePlan-main'>
                <div className="homeplan-box">
                    <div className="homeplan-left">
                        <h3>Reach out for Enquiries and support. </h3>
                        <h3>We're here to help!</h3>
                    </div>
                    <div className="homeplan-right">
                        <div className="walkthrough-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePlan
