import React from 'react'
import { Footer, Navbar } from '../../components'
import "./NewsletterDisplay.css"
import { Link } from 'react-router-dom'
import NewsletterCard from '../../components/NewsletterCard/NewsletterCard'

const NewsletterDisplay = () => {
    return (
        <>
            <Navbar />
            <div id='main'>
                <h1>Newsletters</h1>
                <div className="topTwo">
                    <NewsletterCard />
                    <NewsletterCard />
                </div>
                <div className="all">
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                    <NewsletterCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsletterDisplay