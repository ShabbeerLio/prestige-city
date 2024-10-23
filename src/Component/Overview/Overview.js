import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'

const Overview = () => {

    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Sitting at the prime location of Ghaziabad, it is a residential project with elegant designed homes and airy apartment. Each residence is designed with elegance in mind to provide the best feel and function to homeowners.</p>
                            <p>Some of the major facilities, which are evident in the project, include a top-end gym center, swimming pool, clubhouse, and green parks. These facilities make sure that residents have an enjoyable, well-rounded one with ways to relax, be active, and play.</p>
                            <p>Situated well in terms of transport, the development is well connected to the major transport corridors, reputable schools, hospitals, and shopping centers. It creates a lifestyle that allows residents to enjoy all the fruits that come with life in large urban centers while being surrounded by a very serene environment.</p>
                            <p>This community is therefore intended to create a feeling of citizenship with secure and lively facilities. The well-designed environment and privileged amenities make it a perfect environment to live in for those families and individuals who desire the best lifestyle in Ghaziabad.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
