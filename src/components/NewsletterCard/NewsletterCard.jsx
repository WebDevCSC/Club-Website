import React from 'react'
import "./NewsletterCard.css"
import cs from "../../assets/cscmuj.gif";


const NewsletterCard = () => {
    return (
        <>
            <div className="card">
                <img src={cs} alt="" />
                <h3>Newsletter Name/Heading</h3>
                {/* use slice when states */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam excepturi beatae dicta totam sapiente suscipit minima voluptatibus commodi exercitationem repudiandae ab vel eaque vero, dolore rerum neque nisi quasi.</p>
            </div>
        </>
    )
}

export default NewsletterCard