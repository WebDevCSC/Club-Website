import React from 'react'
import { Footer, Navbar } from '../../components'
import "./NewsletterDisplay.css"
import { Link } from 'react-router-dom'

const NewsletterDisplay = () => {
    return (
        <div>
            <Navbar />
            <div id='main'>
                <h1>Newsletters</h1>
                <div className="topTwo">
                    Newsletter Card
                </div>
                <div className="all">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsletterDisplay