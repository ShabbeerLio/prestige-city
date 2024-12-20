import React, { useEffect } from 'react'
import "./Disclaimer.css"
import { useLocation } from 'react-router-dom';

const Disclaimer =  (props) => {
    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S2XS9C6S8C';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                // gtag('config', 'G-S2XS9C6S8C');
            };
        }
    }, [props.title, props.descriptions, location.pathname]);


    return (
        <div className='Disclaimer'>
            <div className='Disclaimer-main'>
                <div className='Page-title'>
                    <h1>Disclaimer & Privacy Policy</h1>
                </div>
                <div className="Disclaimer-body">
                    <h3>Disclaimer</h3>
                    <p>This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.</p>
                    <p>Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.</p>
                    <span>This site is for information purpose only and should not be treated as the official website.</span>
                    <h3>Privacy Policy</h3>
                    <p>In our endeavor and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.</p>
                    <h5>Updation of privacy policy</h5>
                    <p>This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.</p>
                    <h5>User information</h5>
                    <p>By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party.</p>
                    <h5>Security</h5>
                    <p>To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality. Use of cookies We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact:</p>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
